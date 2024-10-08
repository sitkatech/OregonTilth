﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Serilog;
using Serilog.Context;
using Serilog.Events;

namespace OregonTilth.API.Services.Logging
{
    public class LogHelper
    {
        private readonly RequestDelegate _next;

        public LogHelper(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            EnrichLogContext(httpContext);

            await _next(httpContext);
        }
        
        public static LogEventLevel CustomGetLevel(HttpContext ctx, double _, Exception ex)
        {
            if (IsIgnoredEndpoint(ctx))
            {
                return LogEventLevel.Debug; // Return Debug level logs (which won't get picked up by serilog)
            }

            return ex != null
                ? LogEventLevel.Error
                : ctx.Response.StatusCode > 499
                    ? LogEventLevel.Error
                    : LogEventLevel.Information;
        }

        public static void EnrichFromRequest(IDiagnosticContext diagnosticContext, HttpContext httpContext)
        {
            EnrichLogContext(httpContext);
        }

        private static bool IsIgnoredEndpoint(HttpContext ctx)
        {
            var endpoint = ctx.GetEndpoint();

            return endpoint?.Metadata?.GetMetadata<LogIgnoreAttribute>() != null;
        }

        private static void EnrichLogContext(HttpContext httpContext)
        {
            var request = httpContext.Request;

            // Set all the common properties available for every request
            LogContext.PushProperty("Host", request.Host);
            LogContext.PushProperty("Protocol", request.Protocol);
            LogContext.PushProperty("Scheme", request.Scheme);
            LogContext.PushProperty("ContentLength", request.ContentLength);

            // Only set it if available. You're not sending sensitive data in a querystring right?!
            if (request.QueryString.HasValue)
            {
                LogContext.PushProperty("QueryString", request.QueryString.Value);
            }
            
            var endpoint = httpContext.GetEndpoint();
            if (endpoint is object) // endpoint != null
            {
                LogContext.PushProperty("EndpointName", endpoint.DisplayName);
            }

            
        }

    }
}