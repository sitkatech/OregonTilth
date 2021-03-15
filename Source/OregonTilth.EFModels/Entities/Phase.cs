using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class Phase
    {
        public static List<PhaseDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.Phases.Select(x => PhaseExtensionMethods.AsDto(x)).ToList();
        }
    }
}