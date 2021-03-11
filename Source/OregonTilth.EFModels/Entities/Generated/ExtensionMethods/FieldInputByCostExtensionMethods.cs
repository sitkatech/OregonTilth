//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCost]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputByCostExtensionMethods
    {
        public static FieldInputByCostDto AsDto(this FieldInputByCost fieldInputByCost)
        {
            var fieldInputByCostDto = new FieldInputByCostDto()
            {
                FieldInputByCostID = fieldInputByCost.FieldInputByCostID,
                Workbook = fieldInputByCost.Workbook.AsDto(),
                FieldUnitType = fieldInputByCost.FieldUnitType.AsDto(),
                FieldInputName = fieldInputByCost.FieldInputName,
                CostPerFieldUnit = fieldInputByCost.CostPerFieldUnit,
                Notes = fieldInputByCost.Notes
            };
            DoCustomMappings(fieldInputByCost, fieldInputByCostDto);
            return fieldInputByCostDto;
        }

        static partial void DoCustomMappings(FieldInputByCost fieldInputByCost, FieldInputByCostDto fieldInputByCostDto);
    }
}