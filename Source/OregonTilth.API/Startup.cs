using IdentityServer4.AccessTokenValidation;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DependencyCollector;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Hierarchy;
using OregonTilth.API.Services.Telemetry;
using OregonTilth.EFModels.Entities;
using Serilog;
using Serilog.Sinks.ApplicationInsights.Sinks.ApplicationInsights.TelemetryConverters;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading;
using ILogger = Serilog.ILogger;

namespace OregonTilth.API
{
    public class Startup
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly IWebHostEnvironment _environment;
        private string _instrumentationKey;
        public Startup(IWebHostEnvironment environment, IConfiguration configuration)
        {
            Configuration = configuration;
            _environment = environment;

            _instrumentationKey = Configuration["APPINSIGHTS_INSTRUMENTATIONKEY"];

            if (!string.IsNullOrWhiteSpace(_instrumentationKey))
            {
                _telemetryClient = new TelemetryClient(TelemetryConfiguration.CreateDefault())
                {
                    InstrumentationKey = _instrumentationKey
                };
            }
            else
            {
                _telemetryClient = new TelemetryClient(TelemetryConfiguration.CreateDefault());
            }
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplicationInsightsTelemetry(_instrumentationKey);
            services.AddControllers().AddNewtonsoftJson(opt =>
                {
                    if (!_environment.IsProduction())
                    {
                        opt.SerializerSettings.Formatting = Formatting.Indented;
                    }
                    opt.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                    var resolver = opt.SerializerSettings.ContractResolver;
                    if (resolver != null)
                    {
                        if (resolver is DefaultContractResolver defaultResolver)
                        {
                            defaultResolver.NamingStrategy = null;
                        }
                    }
                });

            services.Configure<FrescaConfiguration>(Configuration);

            // todo: Calling 'BuildServiceProvider' from application code results in an additional copy of singleton services being created.
            // Consider alternatives such as dependency injecting services as parameters to 'Configure'.
            var frescaConfiguration = services.BuildServiceProvider().GetService<IOptions<FrescaConfiguration>>().Value;

            var keystoneHost = frescaConfiguration.KEYSTONE_HOST;
            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme).AddIdentityServerAuthentication(options =>
            {
                if (_environment.IsDevelopment())
                {
                    // NOTE: CG 3/22 - This allows the self-signed cert on Keystone to work locally.
                    options.JwtBackChannelHandler = new HttpClientHandler()
                    {
                        ServerCertificateCustomValidationCallback = (message, certificate2, arg3, arg4) => true
                    };
                }

                options.Authority = keystoneHost;
                options.RequireHttpsMetadata = false;
                options.LegacyAudienceValidation = true;
                options.EnableCaching = false;
                options.SupportedTokens = SupportedTokens.Jwt;
            });

            services.AddDbContext<OregonTilthDbContext>(c =>
            {
                c.UseSqlServer(frescaConfiguration.DB_CONNECTION_STRING, x =>
                {
                    x.CommandTimeout((int)TimeSpan.FromMinutes(3).TotalSeconds);
                });
            });

            services.AddSingleton(Configuration);
            services.AddSingleton<ITelemetryInitializer, CloudRoleNameTelemetryInitializer>();
            services.AddSingleton<ITelemetryInitializer, UserInfoTelemetryInitializer>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            var logger = GetSerilogLogger();
            services.AddSingleton(logger);

            services.AddTransient(s => new KeystoneService(s.GetService<IHttpContextAccessor>(), keystoneHost));

            services.AddSingleton(x => new SitkaSmtpClientService(frescaConfiguration));
            
            services.AddScoped<HierarchyContext>();
            services.AddScoped(s => s.GetService<IHttpContextAccessor>().HttpContext);
            services.AddScoped(s => UserContext.GetUserFromHttpContext(s.GetService<OregonTilthDbContext>(), s.GetService<IHttpContextAccessor>().HttpContext));
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IHostApplicationLifetime applicationLifetime, ILoggerFactory loggerFactory, ILogger logger)
        {
            loggerFactory.AddSerilog(logger);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(policy =>
            {
                //TODO: don't allow all origins
                policy.AllowAnyOrigin();
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
                policy.WithExposedHeaders("WWW-Authenticate");
            });

            app.UseAuthentication();
            app.UseAuthorization();

            app.Use(TelemetryHelper.PostBodyTelemetryMiddleware);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            applicationLifetime.ApplicationStopping.Register(OnShutdown);

            var modules = app.ApplicationServices.GetServices<ITelemetryModule>();
            var dependencyModule = modules.OfType<DependencyTrackingTelemetryModule>().FirstOrDefault();

            if (dependencyModule != null)
            {
                var domains = dependencyModule.ExcludeComponentCorrelationHttpHeadersOnDomains;
                domains.Add("core.windows.net");
                domains.Add("10.0.75.1");
            }
        }
        private void OnShutdown()
        {
            _telemetryClient.Flush();
            Thread.Sleep(1000);
        }

        private ILogger GetSerilogLogger()
        {
            var outputTemplate = $"[{_environment.EnvironmentName}] {{Timestamp:yyyy-MM-dd HH:mm:ss zzz}} {{Level}} | {{RequestId}}-{{SourceContext}}: {{Message}}{{NewLine}}{{Exception}}";
            var serilogLogger = new LoggerConfiguration()
                .ReadFrom.Configuration(Configuration)
                .WriteTo.Console(outputTemplate: outputTemplate);

            if (!_environment.IsDevelopment())
            {
                serilogLogger.WriteTo.ApplicationInsights(_telemetryClient, new TraceTelemetryConverter());
            }

            return serilogLogger.CreateLogger();
        }
    }
}
