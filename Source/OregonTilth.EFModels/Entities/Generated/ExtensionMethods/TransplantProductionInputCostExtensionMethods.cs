//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInputCost]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInputCostExtensionMethods
    {
        public static TransplantProductionInputCostDto AsDto(this TransplantProductionInputCost transplantProductionInputCost)
        {
            var transplantProductionInputCostDto = new TransplantProductionInputCostDto()
            {
                TransplantProductionInputCostID = transplantProductionInputCost.TransplantProductionInputCostID,
                Workbook = transplantProductionInputCost.Workbook.AsDto(),
                TransplantProductionInput = transplantProductionInputCost.TransplantProductionInput.AsDto(),
                TransplantProductionTrayType = transplantProductionInputCost.TransplantProductionTrayType.AsDto(),
                CostPerTray = transplantProductionInputCost.CostPerTray,
                Notes = transplantProductionInputCost.Notes
            };
            DoCustomMappings(transplantProductionInputCost, transplantProductionInputCostDto);
            return transplantProductionInputCostDto;
        }

        static partial void DoCustomMappings(TransplantProductionInputCost transplantProductionInputCost, TransplantProductionInputCostDto transplantProductionInputCostDto);

    }
}