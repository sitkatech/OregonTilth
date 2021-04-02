using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionStandardTimeStandardTimeExtensionMethods
    {
        public static TransplantProductionStandardTimeSummaryDto AsSummaryDto(this TransplantProductionStandardTime harvestPostHarvestStandardTime)
        {
            return new TransplantProductionStandardTimeSummaryDto()
            {
                TransplantProductionStandardTimeID = harvestPostHarvestStandardTime?.TransplantProductionStandardTimeID,
                WorkbookID = harvestPostHarvestStandardTime.WorkbookID,
                Workbook = harvestPostHarvestStandardTime.Workbook.AsSummaryDto(),
                TransplantProductionLaborActivity = harvestPostHarvestStandardTime.TransplantProductionLaborActivity.AsSummaryDto(),
                TransplantProductionTrayType = harvestPostHarvestStandardTime.TransplantProductionTrayType.AsSummaryDto(),
                TimeStudies = harvestPostHarvestStandardTime?.TimeStudies.Select(x => x.AsSummaryDto()),
                StandardTimePerUnit = harvestPostHarvestStandardTime.StandardTimePerUnit
            };
        }
    }
}