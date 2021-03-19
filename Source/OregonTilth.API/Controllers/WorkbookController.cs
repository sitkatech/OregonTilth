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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<WorkbookDto>> List()
        {
            var currentUserDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);
            var workbookDtos = Workbook.GetByUserID(_dbContext, currentUserDto.UserID);
            return Ok(workbookDtos);
        }


        [HttpDelete("workbooks/{workbookID}")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<WorkbookDto>> GetWorkbook([FromRoute] int workbookID)
        {
            var workbook = Workbook.GetByWorkbookID(_dbContext, workbookID);
            return Ok(workbook.AsDto());
        }
        #endregion

        #region "Field Labor Activities Form"
        [HttpPost("workbooks/{workbookID}/forms/field-labor-activities")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetFieldLaborActivities([FromRoute] int workbookID)
        {
            var fieldLaborActivities = FieldLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/field-labor-activities")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<MachineryDto>> GetMachineries([FromRoute] int workbookID)
        {
            var machineries = Machinery.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(machineries);
        }

        [HttpPut("workbooks/{workbookID}/forms/machinery")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropDto>> GetCrops([FromRoute] int workbookID)
        {
            var crops = Crop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(crops);
        }

        [HttpPut("workbooks/{workbookID}/forms/crops")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropUnitDto>> GetCropUnits([FromRoute] int workbookID)
        {
            var cropUnits = CropUnit.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(cropUnits);
        }

        [HttpPut("workbooks/{workbookID}/forms/crop-units")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetFieldLaborByCrops([FromRoute] int workbookID)
        {
            var fieldLaborByCrops = FieldLaborByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborByCrops);
        }

        [HttpPut("workbooks/{workbookID}/forms/field-labor-by-crop")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<FieldInputCostDto>> CreateFieldInputCost([FromBody] FieldInputCostCreateDto fieldInputByCostCreateDto)
        {
            var validationMessages = FieldInputCost.ValidateCreate(_dbContext, fieldInputByCostCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCostDtos = FieldInputCost.CreateNewFieldInputCost(_dbContext, fieldInputByCostCreateDto);
            return Ok(fieldInputByCostDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/field-input-costs")]
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<FieldInputCostDto>> GetFieldInputCosts([FromRoute] int workbookID)
        {
            var fieldInputByCosts = FieldInputCost.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldInputByCosts);
        }

        [HttpPut("workbooks/forms/field-input-costs")]
        [WorkbookEditFeature]
        public ActionResult<FieldInputCostDto> UpdateFieldInputCost([FromBody] FieldInputCostDto fieldInputByCostDto)
        {
            var validationMessages = FieldInputCost.ValidateUpdate(_dbContext, fieldInputByCostDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCostDtos = FieldInputCost.UpdateFieldInputCost(_dbContext, fieldInputByCostDto);
            return Ok(fieldInputByCostDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/field-input-costs/{fieldInputByCostID}")]
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<FieldInputCostDto>> DeleteFieldInputCost([FromRoute] int workbookID, [FromRoute] int fieldInputByCostID)
        {
            var validationMessages = FieldInputCost.ValidateDelete(_dbContext, fieldInputByCostID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FieldInputCost.Delete(_dbContext, fieldInputByCostID);

            var returnDtos = FieldInputCost.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion 

        #region "Transplant Production Labor Activities Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-labor-activities")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionLaborActivityDto>> GetTransplantProductionLaborActivities([FromRoute] int workbookID)
        {
            var fieldLaborActivities = TransplantProductionLaborActivity.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-labor-activities")]
        [WorkbookEditFeature]
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
        [WorkbookEditFeature]
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

        #region Transplant Production Labor Activity By Crop Form
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-labor-by-crop")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionLaborActivityByCropDto>> CreateTransplantProductionLaborActivityByCrop([FromBody] TransplantProductionLaborActivityByCropCreateDto transplantProductionLaborByCropCreateDto)
        {
            var validationMessages = TransplantProductionLaborActivityByCrop.ValidateCreate(_dbContext, transplantProductionLaborByCropCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionLaborByCropDtos = TransplantProductionLaborActivityByCrop.CreateBulk(_dbContext, transplantProductionLaborByCropCreateDto);
            return Ok(transplantProductionLaborByCropDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-labor-by-crop")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> GetTransplantProductionLaborActivityByCrops([FromRoute] int workbookID)
        {
            var transplantProductionLaborByCrops = TransplantProductionLaborActivityByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(transplantProductionLaborByCrops);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-labor-by-crop")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<FieldLaborActivityDto> UpdateTransplantProductionLaborActivityByCrop([FromBody] TransplantProductionLaborActivityByCropDto transplantProductionLaborByCropDto)
        {
            var validationMessages = TransplantProductionLaborActivityByCrop.ValidateUpdate(_dbContext, transplantProductionLaborByCropDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionLaborByCropDtos = TransplantProductionLaborActivityByCrop.UpdateTransplantProductionLaborActivityByCrop(_dbContext, transplantProductionLaborByCropDto);
            return Ok(transplantProductionLaborByCropDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-labor-by-crop/{transplantProductionLaborByCropID}")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldLaborActivityDto>> DeleteTransplantProductionLaborActivityByCrop([FromRoute] int workbookID, [FromRoute] int transplantProductionLaborByCropID)
        {
            var validationMessages = TransplantProductionLaborActivityByCrop.ValidateDelete(_dbContext, transplantProductionLaborByCropID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionLaborActivityByCrop.Delete(_dbContext, transplantProductionLaborByCropID);

            var returnDtos = TransplantProductionLaborActivityByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion

        #region "Transplant Production Inputs Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-inputs")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInputDto>> CreateTransplantProductionInput([FromBody] TransplantProductionInputCreateDto transplantProductionInputCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = TransplantProductionInput.ValidateCreate(_dbContext, transplantProductionInputCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionInputDtos = TransplantProductionInput.CreateNewTransplantProductionInput(_dbContext, transplantProductionInputCreateDto, userDto);
            return Ok(transplantProductionInputDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-inputs")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInputDto>> GetTransplantProductionInputs([FromRoute] int workbookID)
        {
            var fieldLaborActivities = TransplantProductionInput.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-inputs")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<TransplantProductionInputDto> UpdateTransplantProductionInput([FromBody] TransplantProductionInputDto transplantProductionInputDto)
        {
            var validationMessages = TransplantProductionInput.ValidateUpdate(_dbContext, transplantProductionInputDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionInputDtos = TransplantProductionInput.UpdateTransplantProductionInput(_dbContext, transplantProductionInputDto);
            return Ok(transplantProductionInputDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-inputs/{TransplantProductionInputID}")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInputDto>> DeleteTransplantProductionInput([FromRoute] int workbookID, [FromRoute] int transplantProductionInputID)
        {
            var validationMessages = TransplantProductionInput.ValidateDelete(_dbContext, transplantProductionInputID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionInput.Delete(_dbContext, transplantProductionInputID);

            var returnDtos = TransplantProductionInput.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }

        #endregion "Transplant Production Inputs Form"

        #region "Transplant Production Tray Types Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-tray-types")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionTrayTypeDto>> CreateTransplantProductionTrayType([FromBody] TransplantProductionTrayTypeCreateDto transplantProductionTrayTypeCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = TransplantProductionTrayType.ValidateCreate(_dbContext, transplantProductionTrayTypeCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionTrayTypeDtos = TransplantProductionTrayType.CreateNewTransplantProductionTrayType(_dbContext, transplantProductionTrayTypeCreateDto, userDto);
            return Ok(transplantProductionTrayTypeDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-tray-types")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionTrayTypeDto>> GetTransplantProductionTrayTypes([FromRoute] int workbookID)
        {
            var fieldLaborActivities = TransplantProductionTrayType.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldLaborActivities);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-tray-types")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<TransplantProductionTrayTypeDto> UpdateTransplantProductionTrayType([FromBody] TransplantProductionTrayTypeDto transplantProductionTrayTypeDto)
        {
            var validationMessages = TransplantProductionTrayType.ValidateUpdate(_dbContext, transplantProductionTrayTypeDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionTrayTypeDtos = TransplantProductionTrayType.UpdateTransplantProductionTrayType(_dbContext, transplantProductionTrayTypeDto);
            return Ok(transplantProductionTrayTypeDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-tray-types/{TransplantProductionTrayTypeID}")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionTrayTypeDto>> DeleteTransplantProductionTrayType([FromRoute] int workbookID, [FromRoute] int transplantProductionTrayTypeID)
        {
            var validationMessages = TransplantProductionTrayType.ValidateDelete(_dbContext, transplantProductionTrayTypeID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionTrayType.Delete(_dbContext, transplantProductionTrayTypeID);

            var returnDtos = TransplantProductionTrayType.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }

        #endregion "Transplant Production Tray Types Form"

        #region "Transplant Production Input Costs Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-input-costs")]
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<TransplantProductionInputCostDto>> CreateTransplantProductionInputCost([FromBody] TransplantProductionInputCostCreateDto transplantProductionInputCostCreateDto)
        {
            var validationMessages = TransplantProductionInputCost.ValidateCreate(_dbContext, transplantProductionInputCostCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionInputCostDtos = TransplantProductionInputCost.CreateNewTransplantProductionInputCost(_dbContext, transplantProductionInputCostCreateDto);
            return Ok(transplantProductionInputCostDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-input-costs")]
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<TransplantProductionInputCostDto>> GetTransplantProductionInputCosts([FromRoute] int workbookID)
        {
            var transplantProductionInputCosts = TransplantProductionInputCost.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(transplantProductionInputCosts);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-input-costs")]
        [WorkbookEditFeature]
        public ActionResult<TransplantProductionInputCostDto> UpdateTransplantProductionInputCost([FromBody] TransplantProductionInputCostDto transplantProductionInputCostDto)
        {
            var validationMessages = TransplantProductionInputCost.ValidateUpdate(_dbContext, transplantProductionInputCostDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transplantProductionInputCostDtos = TransplantProductionInputCost.UpdateTransplantProductionInputCost(_dbContext, transplantProductionInputCostDto);
            return Ok(transplantProductionInputCostDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-input-costs/{transplantProductionInputCostID}")]
        [WorkbookEditFeature]
        public ActionResult<IEnumerable<TransplantProductionInputCostDto>> DeleteTransplantProductionInputCost([FromRoute] int workbookID, [FromRoute] int transplantProductionInputCostID)
        {
            var validationMessages = TransplantProductionInputCost.ValidateDelete(_dbContext, transplantProductionInputCostID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionInputCost.Delete(_dbContext, transplantProductionInputCostID);

            var returnDtos = TransplantProductionInputCost.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion "Transplant Production Input Costs Form"

        #region Field Input By Crop Form
        [HttpPost("workbooks/{workbookID}/forms/field-input-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldInputByCropDto>> CreateFieldInputByCrop([FromBody] FieldInputByCropCreateDto fieldInputByCropCreateDto)
        {
            var validationMessages = FieldInputByCrop.ValidateCreate(_dbContext, fieldInputByCropCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCropDtos = FieldInputByCrop.CreateBulk(_dbContext, fieldInputByCropCreateDto);
            return Ok(fieldInputByCropDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/field-input-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldInputByCropDto>> GetFieldInputByCrops([FromRoute] int workbookID)
        {
            var fieldInputByCrops = FieldInputByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldInputByCrops);
        }

        [HttpPut("workbooks/{workbookID}/forms/field-input-by-crop")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<FieldInputByCropDto> UpdateFieldInputByCrop([FromBody] FieldInputByCropDto fieldInputByCropDto)
        {
            var validationMessages = FieldInputByCrop.ValidateUpdate(_dbContext, fieldInputByCropDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fieldInputByCropDtos = FieldInputByCrop.UpdateFieldInputByCrop(_dbContext, fieldInputByCropDto);
            return Ok(fieldInputByCropDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/field-input-by-crop/{fieldInputByCropID}")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<FieldInputByCropDto>> DeleteFieldInputByCrop([FromRoute] int workbookID, [FromRoute] int fieldInputByCropID)
        {
            var validationMessages = FieldInputByCrop.ValidateDelete(_dbContext, fieldInputByCropID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FieldInputByCrop.Delete(_dbContext, fieldInputByCropID);

            var returnDtos = FieldInputByCrop.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }
        #endregion

        #region "Transplant Production Information Form"
        [HttpPost("workbooks/{workbookID}/forms/transplant-production-information")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInformationDto>> CreateTransplantProductionInformation([FromBody] TransplantProductionInformationCreateDto tpInfoCreateDto)
        {
            var userDto = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

            var validationMessages = TransplantProductionInformation.ValidateCreate(_dbContext, tpInfoCreateDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tpInfoDtos = TransplantProductionInformation.CreateNewTransplantProductionInformation(_dbContext, tpInfoCreateDto, userDto);
            return Ok(tpInfoDtos);
        }

        [HttpGet("workbooks/{workbookID}/forms/transplant-production-information")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInformationDto>> GetTransplantProductionInformations([FromRoute] int workbookID)
        {
            var tpInfoDtos = TransplantProductionInformation.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(tpInfoDtos);
        }

        [HttpPut("workbooks/{workbookID}/forms/transplant-production-information")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<TransplantProductionInformationDto> UpdateTransplantProductionInformation([FromBody] TransplantProductionInformationDto tpInfoDto)
        {
            var validationMessages = TransplantProductionInformation.ValidateUpdate(_dbContext, tpInfoDto);
            validationMessages.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tpInfoDtos = TransplantProductionInformation.UpdateTransplantProductionInformation(_dbContext, tpInfoDto);
            return Ok(tpInfoDtos);
        }

        [HttpDelete("workbooks/{workbookID}/forms/transplant-production-information/{transplantProductionInformationID}")]
        [WorkbookEditFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<TransplantProductionInformationDto>> DeleteTransplantProductionInformation([FromRoute] int workbookID, [FromRoute] int transplantProductionInformationID)
        {
            var validationMessages = TransplantProductionInformation.ValidateDelete(_dbContext, transplantProductionInformationID);
            validationMessages.ForEach(x => ModelState.AddModelError("Validation", x.Message));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TransplantProductionInformation.Delete(_dbContext, transplantProductionInformationID);

            var returnDtos = TransplantProductionInformation.GetDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(returnDtos);
        }

        #endregion "Transplant Production Information Form"

        #region "Field Standard Times"

        [HttpGet("workbooks/{workbookID}/forms/field-standard-times")]
        [LoggedInUnclassifiedFeature]
        public ActionResult<IEnumerable<TransplantProductionInputCostDto>> GetFieldStandardTimes([FromRoute] int workbookID)
        {
            var fieldStandardTimes = FieldStandardTime.GetDtoListByWorkbookID(_dbContext, workbookID);
            return Ok(fieldStandardTimes);
        }

        #endregion "Field Standard Times"
    }


}

