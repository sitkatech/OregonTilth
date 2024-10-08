//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class HarvestTypeExtensionMethods
    {
        public static HarvestTypeDto AsDto(this HarvestType harvestType)
        {
            var harvestTypeDto = new HarvestTypeDto()
            {
                HarvestTypeID = harvestType.HarvestTypeID,
                HarvestTypeName = harvestType.HarvestTypeName,
                HarvestTypeDisplayName = harvestType.HarvestTypeDisplayName
            };
            DoCustomMappings(harvestType, harvestTypeDto);
            return harvestTypeDto;
        }

        static partial void DoCustomMappings(HarvestType harvestType, HarvestTypeDto harvestTypeDto);

        public static HarvestTypeSimpleDto AsSimpleDto(this HarvestType harvestType)
        {
            var harvestTypeSimpleDto = new HarvestTypeSimpleDto()
            {
                HarvestTypeID = harvestType.HarvestTypeID,
                HarvestTypeName = harvestType.HarvestTypeName,
                HarvestTypeDisplayName = harvestType.HarvestTypeDisplayName
            };
            DoCustomSimpleDtoMappings(harvestType, harvestTypeSimpleDto);
            return harvestTypeSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(HarvestType harvestType, HarvestTypeSimpleDto harvestTypeSimpleDto);
    }
}