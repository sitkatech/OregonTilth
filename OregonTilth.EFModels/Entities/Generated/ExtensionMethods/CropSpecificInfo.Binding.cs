//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropSpecificInfo]
namespace OregonTilth.EFModels.Entities
{
    public partial class CropSpecificInfo
    {
        public TpOrDsType TpOrDsType => TpOrDsType.AllLookupDictionary[TpOrDsTypeID];
    }
}