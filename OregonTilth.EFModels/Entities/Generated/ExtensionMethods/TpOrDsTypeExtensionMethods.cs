//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TpOrDsType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TpOrDsTypeExtensionMethods
    {
        public static TpOrDsTypeDto AsDto(this TpOrDsType tpOrDsType)
        {
            var tpOrDsTypeDto = new TpOrDsTypeDto()
            {
                TpOrDsTypeID = tpOrDsType.TpOrDsTypeID,
                TpOrDsTypeName = tpOrDsType.TpOrDsTypeName,
                TpOrDsTypeDisplayName = tpOrDsType.TpOrDsTypeDisplayName
            };
            DoCustomMappings(tpOrDsType, tpOrDsTypeDto);
            return tpOrDsTypeDto;
        }

        static partial void DoCustomMappings(TpOrDsType tpOrDsType, TpOrDsTypeDto tpOrDsTypeDto);

        public static TpOrDsTypeSimpleDto AsSimpleDto(this TpOrDsType tpOrDsType)
        {
            var tpOrDsTypeSimpleDto = new TpOrDsTypeSimpleDto()
            {
                TpOrDsTypeID = tpOrDsType.TpOrDsTypeID,
                TpOrDsTypeName = tpOrDsType.TpOrDsTypeName,
                TpOrDsTypeDisplayName = tpOrDsType.TpOrDsTypeDisplayName
            };
            DoCustomSimpleDtoMappings(tpOrDsType, tpOrDsTypeSimpleDto);
            return tpOrDsTypeSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(TpOrDsType tpOrDsType, TpOrDsTypeSimpleDto tpOrDsTypeSimpleDto);
    }
}