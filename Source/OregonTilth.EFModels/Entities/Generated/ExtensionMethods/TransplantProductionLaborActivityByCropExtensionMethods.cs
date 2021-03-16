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
                Crop = transplantProductionLaborActivityByCrop.Crop.AsDto(),
                TransplantProductionLaborActivity = transplantProductionLaborActivityByCrop.TransplantProductionLaborActivity.AsDto(),
                Phase = transplantProductionLaborActivityByCrop.Phase?.AsDto(),
                Occurrances = transplantProductionLaborActivityByCrop.Occurrances
            };
            DoCustomMappings(transplantProductionLaborActivityByCrop, transplantProductionLaborActivityByCropDto);
            return transplantProductionLaborActivityByCropDto;
        }

        static partial void DoCustomMappings(TransplantProductionLaborActivityByCrop transplantProductionLaborActivityByCrop, TransplantProductionLaborActivityByCropDto transplantProductionLaborActivityByCropDto);
    }
}