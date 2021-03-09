//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldUnitType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class FieldUnitTypeExtensionMethods
    {
        public static FieldUnitTypeDto AsDto(this FieldUnitType fieldUnitType)
        {
            var fieldUnitTypeDto = new FieldUnitTypeDto()
            {
                FieldUnitTypeID = fieldUnitType.FieldUnitTypeID,
                FieldUnitTypeName = fieldUnitType.FieldUnitTypeName,
                FieldUnitTypeDisplayName = fieldUnitType.FieldUnitTypeDisplayName
            };
            DoCustomMappings(fieldUnitType, fieldUnitTypeDto);
            return fieldUnitTypeDto;
        }

        static partial void DoCustomMappings(FieldUnitType fieldUnitType, FieldUnitTypeDto fieldUnitTypeDto);
    }
}