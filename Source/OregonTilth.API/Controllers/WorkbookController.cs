using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.API.Services.Filters;
using OregonTilth.EFModels.Entities;
using OregonTilth.Models.DataTransferObjects;
using System.Collections.Generic;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class WorkbookController : SitkaController<WorkbookController>
    {
        public WorkbookController(OregonTilthDbContext dbContext, ILogger<WorkbookController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        #region Workbook
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

        [HttpPut("workbooks/{workbookID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<WorkbookDto> EditWorkbook([FromBody] WorkbookDto editWorkbookDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = Workbook.ValidateUpsert(_dbContext, editWorkbookDto, userDto.UserID);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workbook = Workbook.EditWorkbook(_dbContext, editWorkbookDto);
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<WorkbookDto>> GetWorkbook([FromRoute] int workbookID)
        {
            var workbook = Workbook.GetByWorkbookID(_dbContext, workbookID);
            return Ok(workbook.AsDto());
        }
        #endregion

        #region "Field Labor Activities Form"
        [HttpPost("workbooks/{workbookID}/forms/field-labor-activities")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetFieldLaborActivities([FromRoute] int workbookID)
        {
            var fieldLaborActivities = FieldLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/field-labor-activities")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [HttpPost("workbooks/{workbookID}/forms/machinery")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<MachineryDto>> GetMachineries([FromRoute] int workbookID)
        {
            var machineries = Machinery.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(machineries);
        }

        [HttpPut("workbooks/{workbookID}/forms/machinery")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
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

        #region Crops
        [HttpPost("workbooks/{workbookID}/forms/crops")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropDto>> CreateCrop([FromBody] CropCreateDto cropCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = Crop.ValidateCreate(_dbContext, cropCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cropDtos = Crop.CreateNewCrop(_dbContext, cropCreateDto, userDto);
            return Ok(cropDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/crops")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropDto>> GetCrops([FromRoute] int workbookID)
        {
            var crops = Crop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(crops);
        }

        [HttpPut("workbooks/{workbookID}/forms/crops")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<CropDto> UpdateCrop([FromBody] CropDto cropDto)
        {
            var validationMessages = Crop.ValidateUpdate(_dbContext, cropDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cropDtos = Crop.UpdateCrop(_dbContext, cropDto);
            return Ok(cropDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/crops/{cropID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropDto>> DeleteCrop([FromRoute] int workbookID, [FromRoute] int cropID)
        {
            var validationMessages = Crop.ValidateDelete(_dbContext, cropID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Crop.Delete(_dbContext, cropID);

            var returnDtos = Crop.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion

        #region Crop Units
        [HttpPost("workbooks/{workbookID}/forms/crop-units")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropUnitDto>> CreateCropUnit([FromBody] CropUnitCreateDto cropUnitCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = CropUnit.ValidateCreate(_dbContext, cropUnitCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cropUnitDtos = CropUnit.CreateNewCropUnit(_dbContext, cropUnitCreateDto, userDto);
            return Ok(cropUnitDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/crop-units")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropUnitDto>> GetCropUnits([FromRoute] int workbookID)
        {
            var cropUnits = CropUnit.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(cropUnits);
        }

        [HttpPut("workbooks/{workbookID}/forms/crop-units")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<CropUnitDto> UpdateCropUnit([FromBody] CropUnitDto cropUnitDto)
        {
            var validationMessages = CropUnit.ValidateUpdate(_dbContext, cropUnitDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cropUnitDtos = CropUnit.UpdateCropUnit(_dbContext, cropUnitDto);
            return Ok(cropUnitDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/crop-units/{cropUnitID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropUnitDto>> DeleteCropUnit([FromRoute] int workbookID, [FromRoute] int cropUnitID)
        {
            var validationMessages = CropUnit.ValidateDelete(_dbContext, cropUnitID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CropUnit.Delete(_dbContext, cropUnitID);

            var returnDtos = CropUnit.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion

        #region Field Labor By Crop
        [HttpPost("workbooks/{workbookID}/forms/field-labor-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborByCropDto>> CreateFieldLaborByCrop([FromBody] FieldLaborByCropCreateDto fieldLaborByCropCreateDto)
        {
            var validationMessages = FieldLaborByCrop.ValidateCreate(_dbContext, fieldLaborByCropCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldLaborByCropDtos = FieldLaborByCrop.CreateNewFieldLaborByCrop(_dbContext, fieldLaborByCropCreateDto);
            return Ok(fieldLaborByCropDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/field-labor-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetFieldLaborByCrops([FromRoute] int workbookID)
        {
            var fieldLaborByCrops = FieldLaborByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborByCrops);
        }

        [HttpPut("workbooks/{workbookID}/forms/field-labor-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<FieldLaborActivityDto> UpdateFieldLaborByCrop([FromBody] FieldLaborByCropDto fieldLaborByCropDto)
        {
            var validationMessages = FieldLaborByCrop.ValidateUpdate(_dbContext, fieldLaborByCropDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldLaborByCropDtos = FieldLaborByCrop.UpdateFieldLaborByCrop(_dbContext, fieldLaborByCropDto);
            return Ok(fieldLaborByCropDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/field-labor-by-crop/{fieldLaborByCropID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> DeleteFieldLaborByCrop([FromRoute] int workbookID, [FromRoute] int fieldLaborByCropID)
        {
            var validationMessages = FieldLaborByCrop.ValidateDelete(_dbContext, fieldLaborByCropID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FieldLaborByCrop.Delete(_dbContext, fieldLaborByCropID);

            var returnDtos = FieldLaborByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion

        #region "Field Input Costs Form"
        [HttpPost("workbooks/forms/field-input-costs")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldInputByCostDto>> CreateFieldInputByCost([FromBody] FieldInputByCostCreateDto fieldInputByCostCreateDto)
        {
            var validationMessages = FieldInputByCost.ValidateCreate(_dbContext, fieldInputByCostCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCostDtos = FieldInputByCost.CreateNewFieldInputByCost(_dbContext, fieldInputByCostCreateDto);
            return Ok(fieldInputByCostDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/field-input-costs")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldInputByCostDto>> GetFieldInputByCosts([FromRoute] int workbookID)
        {
            var fieldInputByCosts = FieldInputByCost.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldInputByCosts);
        }

        [HttpPut("workbooks/forms/field-input-costs")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<FieldInputByCostDto> UpdateFieldInputByCost([FromBody] FieldInputByCostDto fieldInputByCostDto)
        {
            var validationMessages = FieldInputByCost.ValidateUpdate(_dbContext, fieldInputByCostDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCostDtos = FieldInputByCost.UpdateFieldInputByCost(_dbContext, fieldInputByCostDto);
            return Ok(fieldInputByCostDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/field-input-costs/{fieldInputByCostID}")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<FieldInputByCostDto>> DeleteFieldInputByCost([FromRoute] int workbookID, [FromRoute] int fieldInputByCostID)
        {
            var validationMessages = FieldInputByCost.ValidateDelete(_dbContext, fieldInputByCostID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FieldInputByCost.Delete(_dbContext, fieldInputByCostID);

            var returnDtos = FieldInputByCost.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion 

        #region "Transplant Production Labor Activities Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-labor-activities")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionLaborActivityDto>> CreateTransplantProductionLaborActivity([FromBody] TransplantProductionLaborActivityCreateDto transplantProductionLaborActivityCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = TransplantProductionLaborActivity.ValidateCreate(_dbContext, transplantProductionLaborActivityCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionLaborActivityDtos = TransplantProductionLaborActivity.CreateNewTransplantProductionLaborActivity(_dbContext, transplantProductionLaborActivityCreateDto, userDto);
            return Ok(transplantProductionLaborActivityDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-labor-activities")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionLaborActivityDto>> GetTransplantProductionLaborActivities([FromRoute] int workbookID)
        {
            var fieldLaborActivities = TransplantProductionLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-labor-activities")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<TransplantProductionLaborActivityDto> UpdateTransplantProductionLaborActivity([FromBody] TransplantProductionLaborActivityDto transplantProductionLaborActivityDto)
        {
            var validationMessages = TransplantProductionLaborActivity.ValidateUpdate(_dbContext, transplantProductionLaborActivityDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionLaborActivityDtos = TransplantProductionLaborActivity.UpdateTransplantProductionLaborActivity(_dbContext, transplantProductionLaborActivityDto);
            return Ok(transplantProductionLaborActivityDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-labor-activities/{TransplantProductionLaborActivityID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionLaborActivityDto>> DeleteTransplantProductionLaborActivity([FromRoute] int workbookID, [FromRoute] int transplantProductionLaborActivityID)
        {
            var validationMessages = TransplantProductionLaborActivity.ValidateDelete(_dbContext, transplantProductionLaborActivityID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionLaborActivity.Delete(_dbContext, transplantProductionLaborActivityID);

            var returnDtos = TransplantProductionLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }

        #endregion "Transplant Production Labor Activities Form"
    }
}
