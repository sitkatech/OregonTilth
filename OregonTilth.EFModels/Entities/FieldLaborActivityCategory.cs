using System.Collections.Generic;
using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldLaborActivityCategory
    {
        public static List<FieldLaborActivityCategoryDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldLaborActivityCategories.Select(x => FieldLaborActivityCategoryExtensionMethods.AsDto(x)).ToList();
        }
    }
}