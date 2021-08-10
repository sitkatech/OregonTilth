using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OregonTilth.API.Services;
using OregonTilth.API.Services.Authorization;
using OregonTilth.EFModels.Entities;
using OregonTilth.Models.DataTransferObjects;
using OregonTilth.Models.DataTransferObjects.Page;

namespace OregonTilth.API.Controllers
{
    [ApiController]
    public class PageController : SitkaController<PageController>
    {
        public PageController(OregonTilthDbContext dbContext, ILogger<PageController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("/pages")]
        public ActionResult<List<PageTreeDto>> ListAllPages()
        {
            //var fieldDefinitionDtos = FieldDefinition.List(_dbContext);
            //return fieldDefinitionDtos;

            var pageDtos = Page.List(_dbContext);
            return pageDtos;

        }

        [HttpPost("/pages")]
        public ActionResult<PageDto> CreatePage([FromBody] PageCreateDto pageCreateDto)
        {
            //var fieldDefinitionDtos = FieldDefinition.List(_dbContext);
            //return fieldDefinitionDtos;

            var pageDtos = Page.Create(_dbContext, pageCreateDto);
            return pageDtos;

        }

        //[HttpGet("fieldDefinitions/{fieldDefinitionTypeID}")]
        //public ActionResult<FieldDefinitionDto> GetFieldDefinition([FromRoute] int fieldDefinitionTypeID)
        //{
        //    var fieldDefinitionDto = FieldDefinition.GetByFieldDefinitionTypeID(_dbContext, fieldDefinitionTypeID);
        //    return RequireNotNullThrowNotFound(fieldDefinitionDto, "FieldDefinition", fieldDefinitionTypeID);
        //}

        //[HttpPut("fieldDefinitions/{fieldDefinitionTypeID}")]
        //[AdminFeature]
        //public ActionResult<FieldDefinitionDto> UpdateFieldDefinition([FromRoute] int fieldDefinitionTypeID,
        //    [FromBody] FieldDefinitionDto fieldDefinitionUpdateDto)
        //{
        //    var fieldDefinitionDto = FieldDefinition.GetByFieldDefinitionTypeID(_dbContext, fieldDefinitionTypeID);
        //    if (ThrowNotFound(fieldDefinitionDto, "FieldDefinition", fieldDefinitionTypeID, out var actionResult))
        //    {
        //        return actionResult;
        //    }

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var updatedFieldDefinitionDto =
        //        FieldDefinition.UpdateFieldDefinition(_dbContext, fieldDefinitionTypeID, fieldDefinitionUpdateDto);
        //    return Ok(updatedFieldDefinitionDto);
        //}
    }
}