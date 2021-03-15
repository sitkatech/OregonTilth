using System.Dynamic;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborByCropExtensionMethods
    {
        public static FieldLaborByCropSummaryDto AsSummaryDto(this FieldLaborByCrop fieldLaborByCrop)
        {

            return new FieldLaborByCropSummaryDto()
            {
                FieldLaborByCropID = fieldLaborByCrop.FieldLaborByCropID,
                Workbook = fieldLaborByCrop.Workbook.AsSummaryDto(),
                FieldLaborActivity = fieldLaborByCrop.FieldLaborActivity.AsSummaryDto(),
                Crop = fieldLaborByCrop.Crop.AsSummaryDto(),
                LaborType = fieldLaborByCrop.LaborType.AsDto(),
                Occurrances = fieldLaborByCrop.Occurrances
            };


        }
    }
}