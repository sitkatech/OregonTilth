//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Watershed]

using Fresca.Models.DataTransferObjects;

namespace Fresca.EFModels.Entities
{
    public static partial class WatershedExtensionMethods
    {
        public static WatershedDto AsDto(this Watershed watershed)
        {
            var watershedDto = new WatershedDto()
            {
                WatershedID = watershed.WatershedID,
                WatershedName = watershed.WatershedName
            };
            DoCustomMappings(watershed, watershedDto);
            return watershedDto;
        }

        static partial void DoCustomMappings(Watershed watershed, WatershedDto watershedDto);
    }
}