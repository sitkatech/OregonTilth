using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInputCostExtensionMethods
    {
        public static TransplantProductionInputCostSummaryDto AsSummaryDto(this TransplantProductionInputCost tpInputCost)
        {

            return new TransplantProductionInputCostSummaryDto()
            {
                TransplantProductionInputCostID = tpInputCost.TransplantProductionInputCostID,
                Workbook = tpInputCost.Workbook.AsSummaryDto(),
                TransplantProductionInput = tpInputCost.TransplantProductionInput.AsSummaryDto(),
                TransplantProductionTrayType = tpInputCost.TransplantProductionTrayType.AsSummaryDto(),
                Notes = tpInputCost.Notes,
                CostPerTray = tpInputCost.CostPerTray
            };


        }
    }
}