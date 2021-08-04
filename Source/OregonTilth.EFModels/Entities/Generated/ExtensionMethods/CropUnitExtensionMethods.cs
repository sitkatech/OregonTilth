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

    }
}