using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropSpecificInfoExtensionMethods
    {
        public static CropSpecificInfoSummaryDto AsSummaryDto(this CropSpecificInfo cropSpecificInfo)
        {
            return new CropSpecificInfoSummaryDto()
            {
                CropSpecificInfoID = cropSpecificInfo.CropSpecificInfoID,
                WorkbookID = cropSpecificInfo.Workbook.WorkbookID,
                Crop = cropSpecificInfo.Crop.AsSummaryDto(),
                DripTapeRowsPerStandardWidth = cropSpecificInfo.DripTapeRowsPerStandardWidth,
                InRowSpacing = cropSpecificInfo.InRowSpacing,
                RowsPerStandardWidth = cropSpecificInfo.RowsPerStandardWidth,
                SeedCostPerStandardUnitOfSpace = cropSpecificInfo.SeedCostPerStandardUnitOfSpace,
                TpOrDsType = cropSpecificInfo.TpOrDsType.AsDto(),
                TransplantProductionCostOutsourced = cropSpecificInfo.TransplantProductionCostOutsourced
            };
        }
    }
}