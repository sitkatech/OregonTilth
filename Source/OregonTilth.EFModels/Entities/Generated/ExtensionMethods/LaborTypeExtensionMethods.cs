//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[LaborType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class LaborTypeExtensionMethods
    {
        public static LaborTypeDto AsDto(this LaborType laborType)
        {
            var laborTypeDto = new LaborTypeDto()
            {
                LaborTypeID = laborType.LaborTypeID,
                LaborTypeName = laborType.LaborTypeName,
                LaborTypeDisplayName = laborType.LaborTypeDisplayName
            };
            DoCustomMappings(laborType, laborTypeDto);
            return laborTypeDto;
        }

        static partial void DoCustomMappings(LaborType laborType, LaborTypeDto laborTypeDto);
    }
}