using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Fresca.API.Services;
using Fresca.API.Services.Authorization;
using Fresca.EFModels.Entities;
using Fresca.Models.DataTransferObjects;
using Fresca.Models.DataTransferObjects.Watershed;

namespace Fresca.API.Controllers
{
    [ApiController]
    public class WatershedController : SitkaController<WatershedController>
    {
        public WatershedController(FrescaDbContext dbContext, ILogger<WatershedController> logger, KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext, logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("/watersheds")]
        [AdminFeature]
        public ActionResult<List<WatershedDto>> ListAllWatersheds()
        {
            var watershedDtos = Watershed.List(_dbContext).OrderBy(x => x.WatershedName).ToList();
            return watershedDtos;
        }

        [HttpGet("/watersheds/{watershedID}")]
        [AdminFeature]
        public ActionResult<WatershedDto> GetWatershedByID([FromRoute] int watershedID)
        {
            var watershedDto = Watershed.GetByWatershedID(_dbContext, watershedID);
            return RequireNotNullThrowNotFound(watershedDto, "Watershed", watershedID);
        }

        [HttpPost("watersheds/getBoundingBox")]
        [AdminFeature]
        public ActionResult<BoundingBoxDto> GetBoundingBoxByWatershedIDs([FromBody] WatershedIDListDto watershedIDListDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var boundingBoxDto = Watershed.GetBoundingBoxByWatershedIDs(_dbContext, watershedIDListDto.WatershedIDs);
            return Ok(boundingBoxDto);
        }
    }
}