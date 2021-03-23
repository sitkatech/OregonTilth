using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.API.Services.Filters;
using OregonTilth.EFModels.Entities;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class TimeStudyController : SitkaController<TimeStudyController>
    {
        public TimeStudyController(OregonTilthDbContext dbContext, ILogger<TimeStudyController> logger,
            KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext,
            logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpPut("workbooks/{workbookID}/time-studies")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IHasTimeStudies> EditWorkbook([FromBody] TimeStudiesUpsertDto timeStudiesUpsertDto)
        {
            var validationMessages = TimeStudy.ValidateUpsert(_dbContext, timeStudiesUpsertDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TimeStudy.Upsert(_dbContext, timeStudiesUpsertDto);

            IHasTimeStudies returnDto = null;
            if (timeStudiesUpsertDto.FieldStandardTimeID != null)
            {
                returnDto = FieldStandardTime.GetDtoListByWorkbookID(_dbContext, timeStudiesUpsertDto.WorkbookID)
                    .Single(x => x.FieldStandardTimeID == timeStudiesUpsertDto.FieldStandardTimeID);
            }
            if (timeStudiesUpsertDto.HarvestPostHarvestStandardTimeID != null)
            {
                returnDto = HarvestPostHarvestStandardTime.GetDtoListByWorkbookID(_dbContext, timeStudiesUpsertDto.WorkbookID)
                    .Single(x => x.HarvestPostHarvestStandardTimeID == timeStudiesUpsertDto.HarvestPostHarvestStandardTimeID);
            }

            if (timeStudiesUpsertDto.TransplantProductionStandardTimeID != null)
            {
                returnDto = TransplantProductionStandardTime.GetDtoListByWorkbookID(_dbContext, timeStudiesUpsertDto.WorkbookID)
                    .Single(x => x.TransplantProductionStandardTimeID == timeStudiesUpsertDto.TransplantProductionStandardTimeID);
            }

            return Ok(returnDto);
        }

    }
}