//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborByCrop]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborByCropExtensionMethods
    {
        public static FieldLaborByCropDto AsDto(this FieldLaborByCrop fieldLaborByCrop)
        {
            var fieldLaborByCropDto = new FieldLaborByCropDto()
            {
                FieldLaborByCropID = fieldLaborByCrop.FieldLaborByCropID,
                Workbook = fieldLaborByCrop.Workbook.AsDto(),
                Crop = fieldLaborByCrop.Crop.AsDto(),
                Occurrences = fieldLaborByCrop.Occurrences,
                FieldStandardTime = fieldLaborByCrop.FieldStandardTime.AsDto()
            };
            DoCustomMappings(fieldLaborByCrop, fieldLaborByCropDto);
            return fieldLaborByCropDto;
        }

        static partial void DoCustomMappings(FieldLaborByCrop fieldLaborByCrop, FieldLaborByCropDto fieldLaborByCropDto);
    }
}