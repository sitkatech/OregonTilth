//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivity]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionLaborActivityExtensionMethods
    {
        public static TransplantProductionLaborActivityDto AsDto(this TransplantProductionLaborActivity transplantProductionLaborActivity)
        {
            var transplantProductionLaborActivityDto = new TransplantProductionLaborActivityDto()
            {
                TransplantProductionLaborActivityID = transplantProductionLaborActivity.TransplantProductionLaborActivityID,
                Workbook = transplantProductionLaborActivity.Workbook.AsDto(),
                TransplantProductionLaborActivityName = transplantProductionLaborActivity.TransplantProductionLaborActivityName
            };
            DoCustomMappings(transplantProductionLaborActivity, transplantProductionLaborActivityDto);
            return transplantProductionLaborActivityDto;
        }

        static partial void DoCustomMappings(TransplantProductionLaborActivity transplantProductionLaborActivity, TransplantProductionLaborActivityDto transplantProductionLaborActivityDto);
    }
}