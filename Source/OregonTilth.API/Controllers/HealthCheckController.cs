using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Models.HealthMonitor;
using OregonTilth.API.Services;
using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Controllers
{
    public class HealthCheckController : SitkaController<HealthCheckController>
    {
        public HealthCheckController(OregonTilthDbContext dbContext, ILogger<HealthCheckController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("/health-check")]
        public IActionResult HealthCheck()
        {
            var users = _dbContext.Users;

            var results = new HealthCheckResults();
            var result = new HealthCheckResult("AdminExists");
            result.HealthCheckStatus = HealthCheckStatus.OK;

            if (!users.Any(x => x.RoleID == (int)RoleEnum.Admin))
            {
                result.HealthCheckStatus = HealthCheckStatus.Critical;
                result.AddResultMessage("Could not find any admin accounts.");
            }
            results.Add(result);

            return Ok(results.GetHealthCheckResultsAsCompleteNagiosOutputText());
        }

    }
}