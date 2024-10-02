//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInput]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInputExtensionMethods
    {
        public static TransplantProductionInputDto AsDto(this TransplantProductionInput transplantProductionInput)
        {
            var transplantProductionInputDto = new TransplantProductionInputDto()
            {
                TransplantProductionInputID = transplantProductionInput.TransplantProductionInputID,
                Workbook = transplantProductionInput.Workbook.AsDto(),
                TransplantProductionInputName = transplantProductionInput.TransplantProductionInputName
            };
            DoCustomMappings(transplantProductionInput, transplantProductionInputDto);
            return transplantProductionInputDto;
        }

        static partial void DoCustomMappings(TransplantProductionInput transplantProductionInput, TransplantProductionInputDto transplantProductionInputDto);

        public static TransplantProductionInputSimpleDto AsSimpleDto(this TransplantProductionInput transplantProductionInput)
        {
            var transplantProductionInputSimpleDto = new TransplantProductionInputSimpleDto()
            {
                TransplantProductionInputID = transplantProductionInput.TransplantProductionInputID,
                WorkbookID = transplantProductionInput.WorkbookID,
                TransplantProductionInputName = transplantProductionInput.TransplantProductionInputName
            };
            DoCustomSimpleDtoMappings(transplantProductionInput, transplantProductionInputSimpleDto);
            return transplantProductionInputSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(TransplantProductionInput transplantProductionInput, TransplantProductionInputSimpleDto transplantProductionInputSimpleDto);
    }
}