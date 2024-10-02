//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Machinery]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class MachineryExtensionMethods
    {
        public static MachineryDto AsDto(this Machinery machinery)
        {
            var machineryDto = new MachineryDto()
            {
                MachineryID = machinery.MachineryID,
                Workbook = machinery.Workbook.AsDto(),
                MachineryName = machinery.MachineryName,
                StandardMachineryCost = machinery.StandardMachineryCost,
                Notes = machinery.Notes
            };
            DoCustomMappings(machinery, machineryDto);
            return machineryDto;
        }

        static partial void DoCustomMappings(Machinery machinery, MachineryDto machineryDto);

    }
}