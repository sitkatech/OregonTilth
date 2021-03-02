using Fresca.Models.DataTransferObjects.Watershed;

namespace Fresca.EFModels.Entities
{
    public static partial class WatershedExtensionMethods
    {
        public static WatershedSimpleDto AsSimpleDto(this Watershed watershed)
        {
            var watershedSimpleDto = new WatershedSimpleDto()
            {
                WatershedID = watershed.WatershedID,
                WatershedName = watershed.WatershedName
            };

            return watershedSimpleDto;
        }

    }
}