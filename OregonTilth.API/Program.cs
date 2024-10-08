using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Logging;
using Serilog;

namespace OregonTilth.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args)
        {
            var hostBuilder = Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostContext, config) =>
                {
                    var configurationRoot = config.Build();
                    var secretPath = configurationRoot["SECRET_PATH"];
                    if (File.Exists(secretPath))
                    {
                        config.AddJsonFile(secretPath);
                    }
                })
                .ConfigureLogging(logging => { logging.ClearProviders(); })
                .UseSerilog((context, services, configuration) =>
                {
                    configuration
                        .Enrich.FromLogContext()
                        .ReadFrom.Configuration(context.Configuration);
                })
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });

            return hostBuilder;
        }
    }
}
