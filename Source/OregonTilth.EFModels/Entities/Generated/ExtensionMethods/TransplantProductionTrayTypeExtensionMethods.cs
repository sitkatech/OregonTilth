//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionTrayType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionTrayTypeExtensionMethods
    {
        public static TransplantProductionTrayTypeDto AsDto(this TransplantProductionTrayType transplantProductionTrayType)
        {
            var transplantProductionTrayTypeDto = new TransplantProductionTrayTypeDto()
            {
                TransplantProductionTrayTypeID = transplantProductionTrayType.TransplantProductionTrayTypeID,
                Workbook = transplantProductionTrayType.Workbook.AsDto(),
                TransplantProductionTrayTypeName = transplantProductionTrayType.TransplantProductionTrayTypeName
            };
            DoCustomMappings(transplantProductionTrayType, transplantProductionTrayTypeDto);
            return transplantProductionTrayTypeDto;
        }

        static partial void DoCustomMappings(TransplantProductionTrayType transplantProductionTrayType, TransplantProductionTrayTypeDto transplantProductionTrayTypeDto);
    }
}