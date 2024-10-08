using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using OregonTilth.EFModels.Entities;
using OregonTilth.API.Controllers;
using OregonTilth.API.Services;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.API.Controllers;

[ApiController]
public class SystemInfoController(
    OregonTilthDbContext dbContext,
    ILogger<SystemInfoController> logger,
    KeystoneService keystoneService,
    IOptions<FrescaConfiguration> frescaConfiguration)
    : SitkaController<SystemInfoController>(dbContext, logger, keystoneService, frescaConfiguration)
{
    [HttpGet("/", Name = "GetSystemInfo")]
    public ActionResult<SystemInfoDto> GetSystemInfo([FromServices] IWebHostEnvironment environment)
    {
        var systemInfo = new SystemInfoDto
        {
            Environment = environment.EnvironmentName,
            CurrentTimeUTC = DateTime.UtcNow.ToString("o")
        };

        return Ok(systemInfo);
    }
}