//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInformation]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionInformationExtensionMethods
    {
        public static TransplantProductionInformationDto AsDto(this TransplantProductionInformation transplantProductionInformation)
        {
            var transplantProductionInformationDto = new TransplantProductionInformationDto()
            {
                TransplantProductionInformationID = transplantProductionInformation.TransplantProductionInformationID,
                Workbook = transplantProductionInformation.Workbook.AsDto(),
                Crop = transplantProductionInformation.Crop.AsDto(),
                Phase = transplantProductionInformation.Phase.AsDto(),
                TransplantProductionTrayType = transplantProductionInformation.TransplantProductionTrayType.AsDto(),
                SeedsPerTray = transplantProductionInformation.SeedsPerTray,
                UsageRate = transplantProductionInformation.UsageRate,
                CostPerSeed = transplantProductionInformation.CostPerSeed,
                CropSpecificInputCostsPerTray = transplantProductionInformation.CropSpecificInputCostsPerTray
            };
            DoCustomMappings(transplantProductionInformation, transplantProductionInformationDto);
            return transplantProductionInformationDto;
        }

        static partial void DoCustomMappings(TransplantProductionInformation transplantProductionInformation, TransplantProductionInformationDto transplantProductionInformationDto);
    }
}