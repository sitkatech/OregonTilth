//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestPostHarvestStandardTime]
namespace OregonTilth.EFModels.Entities
{
    public partial class HarvestPostHarvestStandardTime
    {
        public HarvestType HarvestType => HarvestType.AllLookupDictionary[HarvestTypeID];
    }
}