//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Crop]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropExtensionMethods
    {
        public static CropDto AsDto(this Crop crop)
        {
            var cropDto = new CropDto()
            {
                CropID = crop.CropID,
                Workbook = crop.Workbook.AsDto(),
                CropName = crop.CropName
            };
            DoCustomMappings(crop, cropDto);
            return cropDto;
        }

        static partial void DoCustomMappings(Crop crop, CropDto cropDto);
    }
}