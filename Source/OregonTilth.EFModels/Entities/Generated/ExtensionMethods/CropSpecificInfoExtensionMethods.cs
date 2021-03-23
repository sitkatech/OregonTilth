//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropSpecificInfo]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropSpecificInfoExtensionMethods
    {
        public static CropSpecificInfoDto AsDto(this CropSpecificInfo cropSpecificInfo)
        {
            var cropSpecificInfoDto = new CropSpecificInfoDto()
            {
                CropSpecificInfoID = cropSpecificInfo.CropSpecificInfoID,
                Workbook = cropSpecificInfo.Workbook.AsDto(),
                TpOrDsType = cropSpecificInfo.TpOrDsType.AsDto(),
                RowsPerStandardWidth = cropSpecificInfo.RowsPerStandardWidth,
                DripTapeRowsPerStandardWidth = cropSpecificInfo.DripTapeRowsPerStandardWidth,
                InRowSpacing = cropSpecificInfo.InRowSpacing,
                SeedCostPerStandardUnitOfSpace = cropSpecificInfo.SeedCostPerStandardUnitOfSpace,
                TransplantProductionCostOutsourced = cropSpecificInfo.TransplantProductionCostOutsourced
            };
            DoCustomMappings(cropSpecificInfo, cropSpecificInfoDto);
            return cropSpecificInfoDto;
        }

        static partial void DoCustomMappings(CropSpecificInfo cropSpecificInfo, CropSpecificInfoDto cropSpecificInfoDto);
    }
}