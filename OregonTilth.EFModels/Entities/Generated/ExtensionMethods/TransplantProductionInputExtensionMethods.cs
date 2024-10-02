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

    }
}