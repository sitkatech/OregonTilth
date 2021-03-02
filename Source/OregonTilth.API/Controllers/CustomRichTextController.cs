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
    public class CustomRichTextController : SitkaController<CustomRichTextController>
    {
        public CustomRichTextController(FrescaDbContext dbContext, ILogger<CustomRichTextController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("customRichText/{customRichTextTypeID}")]
        public ActionResult<CustomRichTextDto> GetCustomRichText([FromRoute] int customRichTextTypeID)
        {
            var customRichTextDto = CustomRichText.GetByCustomRichTextTypeID(_dbContext, customRichTextTypeID);
            return RequireNotNullThrowNotFound(customRichTextDto, "CustomRichText", customRichTextTypeID);
        }

        [HttpPut("customRichText/{customRichTextTypeID}")]
        [AdminFeature]
        public ActionResult<CustomRichTextDto> UpdateCustomRichText([FromRoute] int customRichTextTypeID, [FromBody] CustomRichTextDto customRichTextUpdateDto)
        {
            var customRichTextDto = CustomRichText.GetByCustomRichTextTypeID(_dbContext, customRichTextTypeID);
            if (ThrowNotFound(customRichTextDto, "CustomRichText", customRichTextTypeID, out var actionResult))
            {
                return actionResult;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedCustomRichTextDto =
                CustomRichText.UpdateCustomRichText(_dbContext, customRichTextTypeID, customRichTextUpdateDto);
            return Ok(updatedCustomRichTextDto);
        }
    }
}
