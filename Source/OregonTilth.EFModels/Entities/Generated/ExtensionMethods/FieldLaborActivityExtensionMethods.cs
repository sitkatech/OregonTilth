//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborActivity]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborActivityExtensionMethods
    {
        public static FieldLaborActivityDto AsDto(this FieldLaborActivity fieldLaborActivity)
        {
            var fieldLaborActivityDto = new FieldLaborActivityDto()
            {
                FieldLaborActivityID = fieldLaborActivity.FieldLaborActivityID,
                Workbook = fieldLaborActivity.Workbook.AsDto(),
                FieldLaborActivityName = fieldLaborActivity.FieldLaborActivityName,
                FieldLaborActivityCategory = fieldLaborActivity.FieldLaborActivityCategory.AsDto(),
                LaborTypeCrew = fieldLaborActivity.LaborTypeCrew,
                LaborTypeOperator = fieldLaborActivity.LaborTypeOperator
            };
            DoCustomMappings(fieldLaborActivity, fieldLaborActivityDto);
            return fieldLaborActivityDto;
        }

        static partial void DoCustomMappings(FieldLaborActivity fieldLaborActivity, FieldLaborActivityDto fieldLaborActivityDto);
    }
}