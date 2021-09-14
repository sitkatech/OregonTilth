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
                UserID = createUserID,
                AverageHourlyWage = workbookToCreate.AverageHourlyWage,
                StandardUnitOfSpaceLength = workbookToCreate.StandardUnitOfSpaceLength,
                StandardUnitOfSpaceWidth = workbookToCreate.StandardUnitOfSpaceWidth
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
            workbook.AverageHourlyWage = workbookToEdit.AverageHourlyWage;
            workbook.StandardUnitOfSpaceLength = workbookToEdit.StandardUnitOfSpaceLength;
            workbook.StandardUnitOfSpaceWidth = workbookToEdit.StandardUnitOfSpaceWidth;

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
                result.Add(new ErrorMessage() { Type = "Workbook Name", Message = "This Workbook Name is already being used. Use a different Workbook Name." });
            }

            if (string.IsNullOrEmpty(workbookDto.WorkbookName))
            {
                result.Add(new ErrorMessage() { Type = "Workbook Name", Message = "Workbooks must have a name." });
            }

            if (workbookDto.AverageHourlyWage <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Average Hourly Wage", Message = "Average Hourly Wage must be greater than zero." });
            }

            if (workbookDto.StandardUnitOfSpaceLength <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Standard Unit of Space Length", Message = "Standard Unit of Space Length must be greater than zero." });
            }

            if (workbookDto.StandardUnitOfSpaceWidth <= 0)
            {
                result.Add(new ErrorMessage() { Type = "Standard Unit of Space Width", Message = "Standard Unit of Space Width must be greater than zero." });
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

        public static List<ErrorMessage> ValidateDuplicate(OregonTilthDbContext dbContext, string duplicateWorkbookName, UserDto userDto)
        {
            var result = new List<ErrorMessage>();
            var userWorkbooks = GetByUserID(dbContext, userDto.UserID).ToList();
            if (userWorkbooks.Any(x => x.WorkbookName.ToLower() == duplicateWorkbookName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Workbook Name", Message = "This Workbook Name is already being used. Use a different Workbook Name." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int workbookID)
        {
            var existingWorkbook = dbContext.Workbooks.AsSplitQuery()
                .Include(x => x.Crops)
                .Include(x => x.CropUnits)
                .Include(x => x.CropSpecificInfos)
                .Include(x => x.CropYieldInformations)
                .Include(x => x.FieldInputByCrops)
                .Include(x => x.FieldInputCosts)
                .Include(x => x.FieldInputCosts)
                .Include(x => x.FieldLaborActivities)
                .Include(x => x.FieldLaborByCrops)
                .Include(x => x.FieldStandardTimes)
                .Include(x => x.HarvestPostHarvestStandardTimes)
                .Include(x => x.Machineries)
                .Include(x => x.TimeStudies)
                .Include(x => x.TransplantProductionInformations)
                .Include(x => x.TransplantProductionInputs)
                .Include(x => x.TransplantProductionInputCosts)
                .Include(x => x.TransplantProductionLaborActivities)
                .Include(x => x.TransplantProductionLaborActivityByCrops)
                .Include(x => x.TransplantProductionStandardTimes)
                .Include(x => x.TransplantProductionTrayTypes)
                .FirstOrDefault(x => x.WorkbookID == workbookID);

            if (existingWorkbook != null)
            {
                dbContext.Workbooks.Remove(existingWorkbook);
                dbContext.SaveChanges();
            }
        }

    }
}