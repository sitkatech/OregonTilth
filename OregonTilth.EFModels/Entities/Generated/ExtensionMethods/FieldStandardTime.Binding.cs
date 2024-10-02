//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldStandardTime]
namespace OregonTilth.EFModels.Entities
{
    public partial class FieldStandardTime
    {
        public LaborType LaborType => LaborType.AllLookupDictionary[LaborTypeID];
        public FieldUnitType FieldUnitType => FieldUnitTypeID.HasValue ? FieldUnitType.AllLookupDictionary[FieldUnitTypeID.Value] : null;
    }
}