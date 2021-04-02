//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropYieldInformation]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropYieldInformationExtensionMethods
    {
        public static CropYieldInformationDto AsDto(this CropYieldInformation cropYieldInformation)
        {
            var cropYieldInformationDto = new CropYieldInformationDto()
            {
                CropYieldInformationID = cropYieldInformation.CropYieldInformationID,
                Workbook = cropYieldInformation.Workbook.AsDto(),
                Crop = cropYieldInformation.Crop.AsDto(),
                CropUnit = cropYieldInformation.CropUnit.AsDto(),
                HarvestedYieldPerStandardUnitOfSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace,
                MarketableYieldPerStandardUnitOfSpace = cropYieldInformation.MarketableYieldPerStandardUnitOfSpace,
                PackagingCostPerCropUnit = cropYieldInformation.PackagingCostPerCropUnit,
                PricePerCropUnit = cropYieldInformation.PricePerCropUnit
            };
            DoCustomMappings(cropYieldInformation, cropYieldInformationDto);
            return cropYieldInformationDto;
        }

        static partial void DoCustomMappings(CropYieldInformation cropYieldInformation, CropYieldInformationDto cropYieldInformationDto);
    }
}