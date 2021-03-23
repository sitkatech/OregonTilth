﻿using System.Linq;
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
                Crop = harvestPostHarvestStandardTime.Crop.AsSummaryDto(),
                CropUnit = harvestPostHarvestStandardTime.CropUnit.AsDto(),
                HarvestType = harvestPostHarvestStandardTime.HarvestType.AsDto(),
                TimeStudies = harvestPostHarvestStandardTime?.TimeStudies.Select(x => x.AsSummaryDto())
            };
        }
    }
}