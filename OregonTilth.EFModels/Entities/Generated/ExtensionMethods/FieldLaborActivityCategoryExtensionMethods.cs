//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborActivityCategory]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldLaborActivityCategoryExtensionMethods
    {
        public static FieldLaborActivityCategoryDto AsDto(this FieldLaborActivityCategory fieldLaborActivityCategory)
        {
            var fieldLaborActivityCategoryDto = new FieldLaborActivityCategoryDto()
            {
                FieldLaborActivityCategoryID = fieldLaborActivityCategory.FieldLaborActivityCategoryID,
                FieldLaborActivityCategoryName = fieldLaborActivityCategory.FieldLaborActivityCategoryName,
                FieldLaborActivityCategoryDisplayName = fieldLaborActivityCategory.FieldLaborActivityCategoryDisplayName
            };
            DoCustomMappings(fieldLaborActivityCategory, fieldLaborActivityCategoryDto);
            return fieldLaborActivityCategoryDto;
        }

        static partial void DoCustomMappings(FieldLaborActivityCategory fieldLaborActivityCategory, FieldLaborActivityCategoryDto fieldLaborActivityCategoryDto);

        public static FieldLaborActivityCategorySimpleDto AsSimpleDto(this FieldLaborActivityCategory fieldLaborActivityCategory)
        {
            var fieldLaborActivityCategorySimpleDto = new FieldLaborActivityCategorySimpleDto()
            {
                FieldLaborActivityCategoryID = fieldLaborActivityCategory.FieldLaborActivityCategoryID,
                FieldLaborActivityCategoryName = fieldLaborActivityCategory.FieldLaborActivityCategoryName,
                FieldLaborActivityCategoryDisplayName = fieldLaborActivityCategory.FieldLaborActivityCategoryDisplayName
            };
            DoCustomSimpleDtoMappings(fieldLaborActivityCategory, fieldLaborActivityCategorySimpleDto);
            return fieldLaborActivityCategorySimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(FieldLaborActivityCategory fieldLaborActivityCategory, FieldLaborActivityCategorySimpleDto fieldLaborActivityCategorySimpleDto);
    }
}