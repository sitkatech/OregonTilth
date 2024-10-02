using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class MachineryExtensionMethods
    {
        public static MachinerySummaryDto AsSummaryDto(this Machinery machinery)
        {
            return new MachinerySummaryDto()
            {
                MachineryID = machinery.MachineryID,
                MachineryName = machinery.MachineryName,
                StandardMachineryCost = machinery.StandardMachineryCost
            };
        }
    }
}