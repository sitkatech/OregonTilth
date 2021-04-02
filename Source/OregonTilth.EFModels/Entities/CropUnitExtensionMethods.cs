using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropUnitExtensionMethods
    {
        public static CropUnitSummaryDto AsSummaryDto(this CropUnit cropUnit)
        {
            return new CropUnitSummaryDto()
            {
                CropUnitID = cropUnit.CropUnitID,
                CropUnitName = cropUnit.CropUnitName
            };
        }
    }
}