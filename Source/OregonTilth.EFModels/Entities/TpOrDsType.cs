using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TpOrDsType
    {
        public static List<TpOrDsTypeDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TpOrDsTypes.Select(x => TpOrDsTypeExtensionMethods.AsDto(x)).ToList();
        }
    }
}