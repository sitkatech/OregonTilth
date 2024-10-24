﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.EFModels.Entities;

namespace OregonTilth.API.Controllers
{
    public abstract class SitkaController<T> : ControllerBase
    {
        protected readonly OregonTilthDbContext _dbContext;
        protected readonly ILogger<T> _logger;
        protected readonly KeystoneService _keystoneService;
        protected readonly FrescaConfiguration _frescaConfiguration;

        protected SitkaController(OregonTilthDbContext dbContext, ILogger<T> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration)
        {
            _dbContext = dbContext;
            _logger = logger;
            _keystoneService = keystoneService;
            _frescaConfiguration = frescaConfiguration.Value;
        }

        protected ActionResult RequireNotNullThrowNotFound(object theObject, string objectType, object objectID)
        {
            return ThrowNotFound(theObject, objectType, objectID, out var actionResult) ? actionResult : Ok(theObject);
        }

        protected bool ThrowNotFound(object theObject, string objectType, object objectID, out ActionResult actionResult)
        {
            if (theObject == null)
            {
                var notFoundMessage = $"{objectType} with ID {objectID} does not exist!";
                _logger.LogError(notFoundMessage);
                {
                    actionResult = NotFound(notFoundMessage);
                    return true;
                }
            }

            actionResult = null;
            return false;
        }
    }
}