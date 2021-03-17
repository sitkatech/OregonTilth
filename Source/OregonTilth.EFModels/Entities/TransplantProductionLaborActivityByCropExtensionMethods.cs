using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionLaborActivityByCropExtensionMethods
    {
        public static TransplantProductionLaborActivityByCropSummaryDto AsSummaryDto(this TransplantProductionLaborActivityByCrop tpLaborByCrop)
        {

            return new TransplantProductionLaborActivityByCropSummaryDto()
            {
                TransplantProductionLaborActivityByCropID = tpLaborByCrop.TransplantProductionLaborActivityByCropID,
                Workbook = tpLaborByCrop.Workbook.AsSummaryDto(),
                TransplantProductionLaborActivity = tpLaborByCrop.TransplantProductionLaborActivity.AsSummaryDto(),
                Crop = tpLaborByCrop.Crop.AsSummaryDto(),
                Phase = tpLaborByCrop.Phase.AsDto(),
                Occurrences = tpLaborByCrop.Occurrences
            };


        }
    }
}