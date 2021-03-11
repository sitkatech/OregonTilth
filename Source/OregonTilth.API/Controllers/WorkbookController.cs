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

        [HttpPut("workbooks")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<WorkbookDto> EditWorkbook([FromBody] WorkbookDto workbookDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = Workbook.ValidateUpsert(_dbContext, workbookDto, userDto.UserID);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workbook = Workbook.EditWorkbook(_dbContext, workbookDto);
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


        [HttpGet("workbooks/{workbookID}")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<WorkbookDto>> GetWorkbook([FromRoute] int workbookID)
        {
            var workbook = Workbook.GetDtoByWorkbookID(_dbContext, workbookID);

            if (workbook == null)
            {
                return BadRequest();
            }

            return Ok(workbook);
        }

        #region "Field Labor Activities Form"

        [HttpPost("workbooks/forms/field-labor-activities")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> CreateFieldLaborActivity([FromBody] FieldLaborActivityUpsertDto fieldLaborActivityUpsertDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = FieldLaborActivity.ValidateUpsert(_dbContext, fieldLaborActivityUpsertDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldLaborActivityDtos = FieldLaborActivity.CreateNewFieldLaborActivity(_dbContext, fieldLaborActivityUpsertDto, userDto);
            return Ok(fieldLaborActivityDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/field-labor-activities")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetFieldLaborActivities([FromRoute] int workbookID)
        {
            var fieldLaborActivities = FieldLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/forms/field-labor-activities")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<FieldLaborActivityDto> UpdateFieldLaborActivity([FromBody] FieldLaborActivityDto fieldLaborActivityDto)
        {
            var validationMessages = FieldLaborActivity.ValidateUpdate(_dbContext, fieldLaborActivityDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldLaborActivityDtos = FieldLaborActivity.UpdateFieldLaborActivity(_dbContext, fieldLaborActivityDto);
            return Ok(fieldLaborActivityDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/field-labor-activities/{fieldLaborActivityID}")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> DeleteFieldLaborActivity([FromRoute] int workbookID, [FromRoute] int fieldLaborActivityID)
        {
            var validationMessages = FieldLaborActivity.ValidateDelete(_dbContext, fieldLaborActivityID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FieldLaborActivity.Delete(_dbContext, fieldLaborActivityID);

            var returnDtos = FieldLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }

        #endregion "Field Labor Activities Form"


        #region "Machinery Form"
        [HttpPost("workbooks/forms/machinery")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<MachineryDto>> CreateMachinery([FromBody] MachineryUpsertDto machineryUpsertDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = Machinery.ValidateUpsert(_dbContext, machineryUpsertDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var machineryDtos = Machinery.CreateNewMachinery(_dbContext, machineryUpsertDto, userDto);
            return Ok(machineryDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/machinery")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<MachineryDto>> GetMachineries([FromRoute] int workbookID)
        {
            var machineries = Machinery.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(machineries);
        }

        [HttpPut("workbooks/forms/machinery")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<MachineryDto> UpdateMachinery([FromBody] MachineryDto machineryDto)
        {
            var validationMessages = Machinery.ValidateUpdate(_dbContext, machineryDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var machineryDtos = Machinery.UpdateMachinery(_dbContext, machineryDto);
            return Ok(machineryDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/machinery/{machineryID}")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<MachineryDto>> DeleteMachinery([FromRoute] int workbookID, [FromRoute] int machineryID)
        {
            var validationMessages = Machinery.ValidateDelete(_dbContext, machineryID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Machinery.Delete(_dbContext, machineryID);

            var returnDtos = Machinery.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion "Machinery Form"

    }
}
