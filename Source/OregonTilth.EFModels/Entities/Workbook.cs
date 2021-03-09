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

            return GetDtoByWorkbookID(dbContext, workbook.WorkbookID);
        }

        public static WorkbookDto EditWorkbook(OregonTilthDbContext dbContext, WorkbookDto workbookToEdit)
        {
            
            var workbook = dbContext.Workbooks
                .Include(x => x.User).ThenInclude(x => x.Role)
                .Single(x => x.WorkbookID == workbookToEdit.WorkbookID);

            workbook.WorkbookName = workbookToEdit.WorkbookName;

            dbContext.SaveChanges();
            dbContext.Entry(workbook).Reload();


            return GetDtoByWorkbookID(dbContext, workbook.WorkbookID);
        }

        public static WorkbookDto GetDtoByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var workbook = GetWorkbookImpl(dbContext).SingleOrDefault(x => x.WorkbookID == workbookID);
            return workbook?.AsDto();
        }

        public static Workbook GetByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var workbook = GetWorkbookImpl(dbContext).SingleOrDefault(x => x.WorkbookID == workbookID);
            return workbook;
        }

        public static IQueryable<WorkbookDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var workbooks = GetWorkbookImpl(dbContext).Where(x => x.UserID == userID);
            return workbooks.Select(x => x.AsDto());
        }

        private static IQueryable<Workbook> GetWorkbookImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.Workbooks
                .Include(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking();
        }

        public static List<ErrorMessage> ValidateUpsert(OregonTilthDbContext dbContext, WorkbookDto workbookDto, int userDtoUserID)
        {
            var result = new List<ErrorMessage>();

            var userWorkbooks = GetByUserID(dbContext, userDtoUserID).ToList();
            if (userWorkbooks.Any(x => x.WorkbookName.ToLower() == workbookDto.WorkbookName.ToLower() && x.WorkbookID != workbookDto.WorkbookID))
            {
                result.Add(new ErrorMessage() { Type = "Workbook Name", Message = "Workbook names must be unique." });
            }

            if (string.IsNullOrEmpty(workbookDto.WorkbookName))
            {
                result.Add(new ErrorMessage() { Type = "Workbook Name", Message = "Workbooks must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int workbookID, UserDto userDto)
        {
            var result = new List<ErrorMessage>();
            var workbook = Workbook.GetByWorkbookID(dbContext, workbookID);
            
            if (workbook.UserID != userDto.UserID)
            {
                result.Add(new ErrorMessage() { Type = "Workbook", Message = "You do not have permission to delete this Workbook." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int workbookID)
        {
            var existingWorkbook = dbContext
                .Workbooks
                .FirstOrDefault(x => x.WorkbookID == workbookID);

            if (existingWorkbook != null)
            {
                dbContext.Workbooks.Remove(existingWorkbook);
                dbContext.SaveChanges();
            }
        }

    }
}