using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.EFModels.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using OregonTilth.Models.DataTransferObjects;
using User = OregonTilth.EFModels.Entities.User;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class WorkbookController : SitkaController<WorkbookController>
    {
        public WorkbookController(OregonTilthDbContext dbContext, ILogger<WorkbookController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpPost("workbooks")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<WorkbookDto> CreateWorkbook([FromBody] WorkbookDto workbookDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = Workbook.ValidateUpsert(_dbContext, workbookDto, userDto.UserID);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var workbook = Workbook.CreateNewWorkbook(_dbContext,workbookDto, userDto.UserID);
            return Ok(workbook);
        }

        [HttpGet("workbooks")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<WorkbookDto>> List()
        {
            var currentUserDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);
            var workbookDtos = Workbook.GetByUserID(_dbContext, currentUserDto.UserID);
            return Ok(workbookDtos);
        }


        [HttpDelete("workbooks/{workbookID}")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<WorkbookDto>> DeleteWorkbook([FromRoute] int workbookID)
        {
            var currentUserDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);
            
            var validationMessages = Workbook.ValidateDelete(_dbContext, workbookID, currentUserDto);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Workbook.Delete(_dbContext, workbookID);

            return NoContent();
        }
    }
}
