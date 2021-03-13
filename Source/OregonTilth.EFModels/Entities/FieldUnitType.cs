using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldUnitType
    {
        public static List<FieldUnitTypeDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldUnitTypes.Select(x => x.AsDto()).ToList();
        }
    }
}