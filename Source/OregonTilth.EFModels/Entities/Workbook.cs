using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class Workbook
    {
        public static IEnumerable<WorkbookDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.Workbooks
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }
    }
}