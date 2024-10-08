using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputCostExtensionMethods
    {
        public static FieldInputCostSummaryDto AsSummaryDto(this FieldInputCost fieldInputCost)
        {
        
            return new FieldInputCostSummaryDto()
            {
                FieldInputCostID = fieldInputCost.FieldInputCostID,
                WorkbookID = fieldInputCost.WorkbookID,
                FieldUnitTypeID = fieldInputCost.FieldUnitTypeID,
                FieldInputCostName = fieldInputCost.FieldInputCostName,
                CostPerFieldUnit = fieldInputCost.CostPerFieldUnit,
                Notes = fieldInputCost.Notes
            };


        }
    }
}