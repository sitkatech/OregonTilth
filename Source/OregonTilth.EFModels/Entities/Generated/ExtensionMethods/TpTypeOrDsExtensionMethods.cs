//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TpTypeOrDs]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TpTypeOrDsExtensionMethods
    {
        public static TpTypeOrDsDto AsDto(this TpTypeOrDs tpTypeOrDs)
        {
            var tpTypeOrDsDto = new TpTypeOrDsDto()
            {
                TpTypeOrDsID = tpTypeOrDs.TpTypeOrDsID,
                TpTypeOrDsName = tpTypeOrDs.TpTypeOrDsName,
                TpTypeOrDsDisplayName = tpTypeOrDs.TpTypeOrDsDisplayName
            };
            DoCustomMappings(tpTypeOrDs, tpTypeOrDsDto);
            return tpTypeOrDsDto;
        }

        static partial void DoCustomMappings(TpTypeOrDs tpTypeOrDs, TpTypeOrDsDto tpTypeOrDsDto);
    }
}