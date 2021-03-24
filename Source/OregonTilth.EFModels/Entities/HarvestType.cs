using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class HarvestType
    {
        public static List<HarvestTypeDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.HarvestTypes.Select(x => HarvestTypeExtensionMethods.AsDto(x)).ToList();
        }
    }
}