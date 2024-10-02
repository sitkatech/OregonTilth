//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestPostHarvestStandardTime]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class HarvestPostHarvestStandardTimeExtensionMethods
    {
        public static HarvestPostHarvestStandardTimeDto AsDto(this HarvestPostHarvestStandardTime harvestPostHarvestStandardTime)
        {
            var harvestPostHarvestStandardTimeDto = new HarvestPostHarvestStandardTimeDto()
            {
                HarvestPostHarvestStandardTimeID = harvestPostHarvestStandardTime.HarvestPostHarvestStandardTimeID,
                Workbook = harvestPostHarvestStandardTime.Workbook.AsDto(),
                Crop = harvestPostHarvestStandardTime.Crop.AsDto(),
                CropUnit = harvestPostHarvestStandardTime.CropUnit.AsDto(),
                HarvestType = harvestPostHarvestStandardTime.HarvestType.AsDto(),
                StandardTimePerUnit = harvestPostHarvestStandardTime.StandardTimePerUnit
            };
            DoCustomMappings(harvestPostHarvestStandardTime, harvestPostHarvestStandardTimeDto);
            return harvestPostHarvestStandardTimeDto;
        }

        static partial void DoCustomMappings(HarvestPostHarvestStandardTime harvestPostHarvestStandardTime, HarvestPostHarvestStandardTimeDto harvestPostHarvestStandardTimeDto);

    }
}