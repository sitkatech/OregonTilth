using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class HarvestPostHarvestStandardTimeExtensionMethods
    {
        public static HarvestPostHarvestStandardTimeSummaryDto AsSummaryDto(this HarvestPostHarvestStandardTime harvestPostHarvestStandardTime)
        {
            return new HarvestPostHarvestStandardTimeSummaryDto()
            {
                HarvestPostHarvestStandardTimeID = harvestPostHarvestStandardTime?.HarvestPostHarvestStandardTimeID,
                WorkbookID = harvestPostHarvestStandardTime.WorkbookID,
                Workbook = harvestPostHarvestStandardTime.Workbook.AsSummaryDto(),
                Crop = harvestPostHarvestStandardTime.Crop.AsSummaryDto(),
                CropUnit = harvestPostHarvestStandardTime.CropUnit.AsDto(),
                HarvestType = harvestPostHarvestStandardTime.HarvestType.AsDto(),
                TimeStudies = harvestPostHarvestStandardTime?.TimeStudies.Select(x => x.AsSummaryDto()),
                StandardTimePerUnit = harvestPostHarvestStandardTime.StandardTimePerUnit
            };
        }

        public static AvailableCropYieldInformationDto AsAvailableCropYieldInformationDto(
            this HarvestPostHarvestStandardTime harvestPostHarvestStandardTime)
        {
            return new AvailableCropYieldInformationDto()
            {
                CropID = harvestPostHarvestStandardTime.CropID,
                CropName = harvestPostHarvestStandardTime.Crop.CropName,
                CropUnitID = harvestPostHarvestStandardTime.CropUnitID,
                CropUnitName = harvestPostHarvestStandardTime.CropUnit.CropUnitName
            };
        }
    }
}