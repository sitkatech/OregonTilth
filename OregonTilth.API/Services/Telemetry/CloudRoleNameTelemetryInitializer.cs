using System.Reflection;
using Microsoft.ApplicationInsights.Channel;
using Microsoft.ApplicationInsights.Extensibility;

namespace OregonTilth.API.Services.Telemetry
{
    // This will annotate the log messages and application map with the correct service name instead of the application insights resource name (terratrak-<env>-insights for everything)
    public class CloudRoleNameTelemetryInitializer : ITelemetryInitializer
    {
        public void Initialize(ITelemetry telemetry)
        {
            if (string.IsNullOrEmpty(telemetry.Context.Cloud.RoleName))
            {
                telemetry.Context.Cloud.RoleName = Assembly.GetEntryAssembly()?.GetName().Name;
            }
        }
    }
}