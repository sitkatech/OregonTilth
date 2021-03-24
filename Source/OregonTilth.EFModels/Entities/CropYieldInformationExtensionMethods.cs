using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropYieldInformationExtensionMethods
    {
        public static CropYieldInformationSummaryDto AsSummaryDto(this CropYieldInformation cropYieldInformation)
        {
            return new CropYieldInformationSummaryDto()
            {
                CropYieldInformationID = cropYieldInformation.CropYieldInformationID,
                Crop = cropYieldInformation.Crop.AsSummaryDto(),
                CropUnit = cropYieldInformation.CropUnit.AsSummaryDto(),
                HarvestedYieldPerStandardUnitOfSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace,
                MarketableYieldPerStandardUnitOfSpace = cropYieldInformation.MarketableYieldPerStandardUnitOfSpace,
                PackagingCostPerCropUnit = cropYieldInformation.PackagingCostPerCropUnit,
                PricePerCropUnit = cropYieldInformation.PricePerCropUnit,
                WorkbookID = cropYieldInformation.WorkbookID
            };
        }
    }
}