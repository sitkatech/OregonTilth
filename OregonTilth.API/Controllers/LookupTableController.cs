using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("lookupTable/field-unit-types")]
        public ActionResult<List<FieldUnitTypeDto>> ListAllFieldUnitTypes()
        {
            var fieldUnitTypes = FieldUnitType.List(_dbContext);
            return fieldUnitTypes;
        }

        [HttpGet("lookupTable/phases")]
        public ActionResult<List<PhaseDto>> ListAllPhases()
        {
            var phases = Phase.List(_dbContext);
            return phases;
        }

        [HttpGet("lookupTable/harvest-types")]
        public ActionResult<List<HarvestTypeDto>> ListAllHarvestTypes()
        {
            var harvestTypes = HarvestType.List(_dbContext);
            return harvestTypes;
        }

        [HttpGet("lookupTable/tp-or-ds-types")]
        public ActionResult<List<TpOrDsTypeDto>> ListAllTpOrDsTypes()
        {
            var allTpOrDsTypes = TpOrDsType.List(_dbContext); //FieldUnitType.List(_dbContext);
            return allTpOrDsTypes;
        }
    }
}
