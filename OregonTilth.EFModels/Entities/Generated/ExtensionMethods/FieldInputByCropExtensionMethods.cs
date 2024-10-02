//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCrop]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldInputByCropExtensionMethods
    {
        public static FieldInputByCropDto AsDto(this FieldInputByCrop fieldInputByCrop)
        {
            var fieldInputByCropDto = new FieldInputByCropDto()
            {
                FieldInputByCropID = fieldInputByCrop.FieldInputByCropID,
                Workbook = fieldInputByCrop.Workbook.AsDto(),
                Crop = fieldInputByCrop.Crop.AsDto(),
                FieldInputCost = fieldInputByCrop.FieldInputCost.AsDto(),
                Occurrences = fieldInputByCrop.Occurrences,
                Notes = fieldInputByCrop.Notes
            };
            DoCustomMappings(fieldInputByCrop, fieldInputByCropDto);
            return fieldInputByCropDto;
        }

        static partial void DoCustomMappings(FieldInputByCrop fieldInputByCrop, FieldInputByCropDto fieldInputByCropDto);

        public static FieldInputByCropSimpleDto AsSimpleDto(this FieldInputByCrop fieldInputByCrop)
        {
            var fieldInputByCropSimpleDto = new FieldInputByCropSimpleDto()
            {
                FieldInputByCropID = fieldInputByCrop.FieldInputByCropID,
                WorkbookID = fieldInputByCrop.WorkbookID,
                CropID = fieldInputByCrop.CropID,
                FieldInputCostID = fieldInputByCrop.FieldInputCostID,
                Occurrences = fieldInputByCrop.Occurrences,
                Notes = fieldInputByCrop.Notes
            };
            DoCustomSimpleDtoMappings(fieldInputByCrop, fieldInputByCropSimpleDto);
            return fieldInputByCropSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(FieldInputByCrop fieldInputByCrop, FieldInputByCropSimpleDto fieldInputByCropSimpleDto);
    }
}