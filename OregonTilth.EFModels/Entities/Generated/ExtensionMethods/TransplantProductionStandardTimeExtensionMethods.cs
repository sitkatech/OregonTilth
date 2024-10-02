//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionStandardTime]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TransplantProductionStandardTimeExtensionMethods
    {
        public static TransplantProductionStandardTimeDto AsDto(this TransplantProductionStandardTime transplantProductionStandardTime)
        {
            var transplantProductionStandardTimeDto = new TransplantProductionStandardTimeDto()
            {
                TransplantProductionStandardTimeID = transplantProductionStandardTime.TransplantProductionStandardTimeID,
                Workbook = transplantProductionStandardTime.Workbook.AsDto(),
                TransplantProductionLaborActivity = transplantProductionStandardTime.TransplantProductionLaborActivity.AsDto(),
                TransplantProductionTrayType = transplantProductionStandardTime.TransplantProductionTrayType.AsDto(),
                StandardTimePerUnit = transplantProductionStandardTime.StandardTimePerUnit
            };
            DoCustomMappings(transplantProductionStandardTime, transplantProductionStandardTimeDto);
            return transplantProductionStandardTimeDto;
        }

        static partial void DoCustomMappings(TransplantProductionStandardTime transplantProductionStandardTime, TransplantProductionStandardTimeDto transplantProductionStandardTimeDto);

        public static TransplantProductionStandardTimeSimpleDto AsSimpleDto(this TransplantProductionStandardTime transplantProductionStandardTime)
        {
            var transplantProductionStandardTimeSimpleDto = new TransplantProductionStandardTimeSimpleDto()
            {
                TransplantProductionStandardTimeID = transplantProductionStandardTime.TransplantProductionStandardTimeID,
                WorkbookID = transplantProductionStandardTime.WorkbookID,
                TransplantProductionLaborActivityID = transplantProductionStandardTime.TransplantProductionLaborActivityID,
                TransplantProductionTrayTypeID = transplantProductionStandardTime.TransplantProductionTrayTypeID,
                StandardTimePerUnit = transplantProductionStandardTime.StandardTimePerUnit
            };
            DoCustomSimpleDtoMappings(transplantProductionStandardTime, transplantProductionStandardTimeSimpleDto);
            return transplantProductionStandardTimeSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(TransplantProductionStandardTime transplantProductionStandardTime, TransplantProductionStandardTimeSimpleDto transplantProductionStandardTimeSimpleDto);
    }
}