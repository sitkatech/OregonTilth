//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputCost]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputCostExtensionMethods
    {
        public static FieldInputCostDto AsDto(this FieldInputCost fieldInputCost)
        {
            var fieldInputCostDto = new FieldInputCostDto()
            {
                FieldInputCostID = fieldInputCost.FieldInputCostID,
                Workbook = fieldInputCost.Workbook.AsDto(),
                FieldUnitType = fieldInputCost.FieldUnitType.AsDto(),
                FieldInputCostName = fieldInputCost.FieldInputCostName,
                CostPerFieldUnit = fieldInputCost.CostPerFieldUnit,
                Notes = fieldInputCost.Notes
            };
            DoCustomMappings(fieldInputCost, fieldInputCostDto);
            return fieldInputCostDto;
        }

        static partial void DoCustomMappings(FieldInputCost fieldInputCost, FieldInputCostDto fieldInputCostDto);

        public static FieldInputCostSimpleDto AsSimpleDto(this FieldInputCost fieldInputCost)
        {
            var fieldInputCostSimpleDto = new FieldInputCostSimpleDto()
            {
                FieldInputCostID = fieldInputCost.FieldInputCostID,
                WorkbookID = fieldInputCost.WorkbookID,
                FieldUnitTypeID = fieldInputCost.FieldUnitTypeID,
                FieldInputCostName = fieldInputCost.FieldInputCostName,
                CostPerFieldUnit = fieldInputCost.CostPerFieldUnit,
                Notes = fieldInputCost.Notes
            };
            DoCustomSimpleDtoMappings(fieldInputCost, fieldInputCostSimpleDto);
            return fieldInputCostSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(FieldInputCost fieldInputCost, FieldInputCostSimpleDto fieldInputCostSimpleDto);
    }
}