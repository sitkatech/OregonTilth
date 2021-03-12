using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropExtensionMethods
    {
        public static CropSummaryDto AsSummaryDto(this Crop crop)
        {
            return new CropSummaryDto()
            {
                CropID = crop.CropID,
                CropName = crop.CropName,
            };
        }
    }
}