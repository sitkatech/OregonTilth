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
        public ActionResult<WorkbookDto> EditWorkbook([FromBody] TimeStudiesUpsertDto timeStudiesUpsertDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = TimeStudy.ValidateUpsert(_dbContext, timeStudiesUpsertDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var timeStudies = TimeStudy.Upsert(_dbContext, timeStudiesUpsertDto);

            var workbook = Workbook.GetByWorkbookID(_dbContext, timeStudiesUpsertDto.WorkbookID);
            return Ok(workbook);
        }

    }
}