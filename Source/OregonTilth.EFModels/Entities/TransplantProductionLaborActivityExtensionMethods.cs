using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionLaborActivityExtensionMethods
    {
        public static TransplantProductionLaborActivitySummaryDto AsSummaryDto(this TransplantProductionLaborActivity fieldLaborActivity)
        {
            return new TransplantProductionLaborActivitySummaryDto()
            {
                TransplantProductionLaborActivityID = fieldLaborActivity.TransplantProductionLaborActivityID,
                TransplantProductionLaborActivityName = fieldLaborActivity.TransplantProductionLaborActivityName,
            };
        }
    }
}