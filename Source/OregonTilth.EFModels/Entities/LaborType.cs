using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class LaborType
    {
        public static List<LaborTypeDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.LaborTypes.Select(x => LaborTypeExtensionMethods.AsDto(x)).ToList();
        }
    }

    public enum LaborTypeEnum
    {
        Crew = 1,
        Operator = 2
    }
}