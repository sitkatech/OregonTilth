//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivityByCrop]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionLaborActivityByCropExtensionMethods
    {
        public static TransplantProductionLaborActivityByCropDto AsDto(this TransplantProductionLaborActivityByCrop transplantProductionLaborActivityByCrop)
        {
            var transplantProductionLaborActivityByCropDto = new TransplantProductionLaborActivityByCropDto()
            {
                TransplantProductionLaborActivityByCropID = transplantProductionLaborActivityByCrop.TransplantProductionLaborActivityByCropID,
                Workbook = transplantProductionLaborActivityByCrop.Workbook.AsDto(),
                TransplantProductionLaborActivity = transplantProductionLaborActivityByCrop.TransplantProductionLaborActivity.AsDto(),
                Occurrences = transplantProductionLaborActivityByCrop.Occurrences,
                TransplantProductionInformation = transplantProductionLaborActivityByCrop.TransplantProductionInformation.AsDto(),
                Notes = transplantProductionLaborActivityByCrop.Notes
            };
            DoCustomMappings(transplantProductionLaborActivityByCrop, transplantProductionLaborActivityByCropDto);
            return transplantProductionLaborActivityByCropDto;
        }

        static partial void DoCustomMappings(TransplantProductionLaborActivityByCrop transplantProductionLaborActivityByCrop, TransplantProductionLaborActivityByCropDto transplantProductionLaborActivityByCropDto);

        public static TransplantProductionLaborActivityByCropSimpleDto AsSimpleDto(this TransplantProductionLaborActivityByCrop transplantProductionLaborActivityByCrop)
        {
            var transplantProductionLaborActivityByCropSimpleDto = new TransplantProductionLaborActivityByCropSimpleDto()
            {
                TransplantProductionLaborActivityByCropID = transplantProductionLaborActivityByCrop.TransplantProductionLaborActivityByCropID,
                WorkbookID = transplantProductionLaborActivityByCrop.WorkbookID,
                TransplantProductionLaborActivityID = transplantProductionLaborActivityByCrop.TransplantProductionLaborActivityID,
                Occurrences = transplantProductionLaborActivityByCrop.Occurrences,
                TransplantProductionInformationID = transplantProductionLaborActivityByCrop.TransplantProductionInformationID,
                Notes = transplantProductionLaborActivityByCrop.Notes
            };
            DoCustomSimpleDtoMappings(transplantProductionLaborActivityByCrop, transplantProductionLaborActivityByCropSimpleDto);
            return transplantProductionLaborActivityByCropSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(TransplantProductionLaborActivityByCrop transplantProductionLaborActivityByCrop, TransplantProductionLaborActivityByCropSimpleDto transplantProductionLaborActivityByCropSimpleDto);
    }
}