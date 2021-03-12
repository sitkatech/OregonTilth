//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldStandardTime]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldStandardTimeExtensionMethods
    {
        public static FieldStandardTimeDto AsDto(this FieldStandardTime fieldStandardTime)
        {
            var fieldStandardTimeDto = new FieldStandardTimeDto()
            {
                FieldStandardTimeID = fieldStandardTime.FieldStandardTimeID,
                Workbook = fieldStandardTime.Workbook.AsDto(),
                FieldLaborActivity = fieldStandardTime.FieldLaborActivity.AsDto(),
                LaborType = fieldStandardTime.LaborType.AsDto(),
                Machinery = fieldStandardTime.Machinery.AsDto(),
                FieldUnitType = fieldStandardTime.FieldUnitType.AsDto(),
                StandardTimePerUnit = fieldStandardTime.StandardTimePerUnit
            };
            DoCustomMappings(fieldStandardTime, fieldStandardTimeDto);
            return fieldStandardTimeDto;
        }

        static partial void DoCustomMappings(FieldStandardTime fieldStandardTime, FieldStandardTimeDto fieldStandardTimeDto);
    }
}