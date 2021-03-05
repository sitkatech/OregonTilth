using System;
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
                .Include(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => x.AsDto()).AsEnumerable();
        }

        public static WorkbookDto CreateNewWorkbook(OregonTilthDbContext dbContext, WorkbookDto workbookToCreate, int createUserID)
        {
            if(string.IsNullOrEmpty(workbookToCreate.WorkbookName))
            {
                return null;
            }

            var workbook = new Workbook
            {
                WorkbookName = workbookToCreate.WorkbookName,
                CreateDate = DateTime.UtcNow,
                UserID = createUserID
            };

            dbContext.Workbooks.Add(workbook);
            dbContext.SaveChanges();
            dbContext.Entry(workbook).Reload();

            return GetByWorkbookID(dbContext, workbook.WorkbookID);
        }

        public static WorkbookDto GetByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var workbook = GetWorkbookImpl(dbContext).SingleOrDefault(x => x.WorkbookID == workbookID);
            return workbook?.AsDto();
        }

        private static IQueryable<Workbook> GetWorkbookImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.Workbooks
                .Include(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking();
        }
    }
}