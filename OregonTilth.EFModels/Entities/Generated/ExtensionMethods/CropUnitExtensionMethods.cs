//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropUnit]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropUnitExtensionMethods
    {
        public static CropUnitDto AsDto(this CropUnit cropUnit)
        {
            var cropUnitDto = new CropUnitDto()
            {
                CropUnitID = cropUnit.CropUnitID,
                Workbook = cropUnit.Workbook.AsDto(),
                CropUnitName = cropUnit.CropUnitName
            };
            DoCustomMappings(cropUnit, cropUnitDto);
            return cropUnitDto;
        }

        static partial void DoCustomMappings(CropUnit cropUnit, CropUnitDto cropUnitDto);

        public static CropUnitSimpleDto AsSimpleDto(this CropUnit cropUnit)
        {
            var cropUnitSimpleDto = new CropUnitSimpleDto()
            {
                CropUnitID = cropUnit.CropUnitID,
                WorkbookID = cropUnit.WorkbookID,
                CropUnitName = cropUnit.CropUnitName
            };
            DoCustomSimpleDtoMappings(cropUnit, cropUnitSimpleDto);
            return cropUnitSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(CropUnit cropUnit, CropUnitSimpleDto cropUnitSimpleDto);
    }
}