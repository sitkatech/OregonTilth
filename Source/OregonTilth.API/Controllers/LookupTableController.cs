﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.EFModels.Entities;
using System.Collections.Generic;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class LookupTableController : SitkaController<LookupTableController>
    {
        public LookupTableController(OregonTilthDbContext dbContext, ILogger<LookupTableController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("lookupTable/field-labor-activity-categories")]
        public ActionResult<List<FieldLaborActivityCategoryDto>> ListAllFieldLaborActivityCategories()
        {
            var fieldlaborActivityCategoryDtos = FieldLaborActivityCategory.List(_dbContext);
            return fieldlaborActivityCategoryDtos;
        }

        [HttpGet("lookupTable/labor-types")]
        public ActionResult<List<LaborTypeDto>> ListAllLaborTypes()
        {
            var laborTypeDtos = LaborType.List(_dbContext);
            return laborTypeDtos;
        }

    }
}