using System.Collections.Generic;
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
    public class ResultsController : SitkaController<ResultsController>
    {
        public ResultsController(OregonTilthDbContext dbContext, ILogger<ResultsController> logger,
            KeystoneService keystoneService, IOptions<FrescaConfiguration> frescaConfiguration) : base(dbContext,
            logger, keystoneService, frescaConfiguration)
        {
        }

        [HttpGet("workbooks/{workbookID}/results/crop-crop-unit")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<CropCropUnitDashboardReportDto>> GetCropYieldInformationDashboardReportDtos([FromRoute] int workbookID)
        {
            var cropYieldInfos = CropYieldInformation.GetCropCropUnitDashboardReportDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(cropYieldInfos);
        }

        [HttpGet("workbooks/{workbookID}/results/labor-hours")]
        [LoggedInUnclassifiedFeature]
        [ValidateWorkbookIDFromRouteExistsAndBelongsToUser]
        public ActionResult<IEnumerable<LaborHoursDashboardReportDto>> GetCropYieldInformationDashboardReportLaborHoursDtos([FromRoute] int workbookID)
        {
            var cropYieldInfos = CropYieldInformation.GetLaborHoursDashboardReportDtoListByWorkbookID(_dbContext, workbookID);

            return Ok(cropYieldInfos);
        }
    }
}