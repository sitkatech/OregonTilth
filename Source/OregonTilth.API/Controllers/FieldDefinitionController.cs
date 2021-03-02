using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Fresca.API.Services;
using Fresca.API.Services.Authorization;
using Fresca.EFModels.Entities;
using Fresca.Models.DataTransferObjects;

namespace Fresca.API.Controllers
{
    [ApiController]
    public class FieldDefinitionController : SitkaController<FieldDefinitionController>
    {
        public FieldDefinitionController(FrescaDbContext dbContext, ILogger<FieldDefinitionController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("/fieldDefinitions")]
        public ActionResult<List<FieldDefinitionDto>> ListAllFieldDefinitions()
        {
            var fieldDefinitionDtos = FieldDefinition.List(_dbContext);
            return fieldDefinitionDtos;
        }


        [HttpGet("fieldDefinitions/{fieldDefinitionTypeID}")]
        public ActionResult<FieldDefinitionDto> GetFieldDefinition([FromRoute] int fieldDefinitionTypeID)
        {
            var fieldDefinitionDto = FieldDefinition.GetByFieldDefinitionTypeID(_dbContext, fieldDefinitionTypeID);
            return RequireNotNullThrowNotFound(fieldDefinitionDto, "FieldDefinition", fieldDefinitionTypeID);
        }

        [HttpPut("fieldDefinitions/{fieldDefinitionTypeID}")]
        [AdminFeature]
        public ActionResult<FieldDefinitionDto> UpdateFieldDefinition([FromRoute] int fieldDefinitionTypeID,
            [FromBody] FieldDefinitionDto fieldDefinitionUpdateDto)
        {
            var fieldDefinitionDto = FieldDefinition.GetByFieldDefinitionTypeID(_dbContext, fieldDefinitionTypeID);
            if (ThrowNotFound(fieldDefinitionDto, "FieldDefinition", fieldDefinitionTypeID, out var actionResult))
            {
                return actionResult;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedFieldDefinitionDto =
                FieldDefinition.UpdateFieldDefinition(_dbContext, fieldDefinitionTypeID, fieldDefinitionUpdateDto);
            return Ok(updatedFieldDefinitionDto);
        }
    }
}
