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
                //FieldInput = tpLaborByCrop.FieldInput.AsSummaryDto(),
                Crop = tpLaborByCrop.Crop.AsSummaryDto(),
                //Phase = tpLaborByCrop.Phase.AsDto(),
                Occurrences = tpLaborByCrop.Occurrences
            };


        }
    }
}