using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class vFieldLaborActivityForTimeStudy
    {
       
        public static IQueryable<vFieldLaborActivityForTimeStudyDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var vFieldLaborActivitiesForTimeStudy = GetListImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return vFieldLaborActivitiesForTimeStudy.Select(x => x.AsDto());
        }

        private static IQueryable<vFieldLaborActivityForTimeStudy> GetListImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.vFieldLaborActivityForTimeStudies
                .AsNoTracking();
        }

        
        
    }
}