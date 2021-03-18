using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputByCropExtensionMethods
    {
        public static FieldInputByCropSummaryDto AsSummaryDto(this FieldInputByCrop tpLaborByCrop)
        {

            return new FieldInputByCropSummaryDto()
            {
                FieldInputByCropID = tpLaborByCrop.FieldInputByCropID,
                Workbook = tpLaborByCrop.Workbook.AsSummaryDto(),
                FieldInputCost = tpLaborByCrop.FieldInputCost.AsSummaryDto(),
                Crop = tpLaborByCrop.Crop.AsSummaryDto(),
                Occurrences = tpLaborByCrop.Occurrences
            };


        }
    }
}