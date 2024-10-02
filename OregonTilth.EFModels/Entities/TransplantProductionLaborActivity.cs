using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.EFModels.Util;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionLaborActivity
    {
        public static IEnumerable<TransplantProductionLaborActivityDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionLaborActivities
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => TransplantProductionLaborActivityExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionLaborActivityCreateDto transplantProductionLaborActivityCreateDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionLaborActivitiesForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityCreateDto.WorkbookID).ToList();
            if (userTransplantProductionLaborActivitiesForWorkbook.Any(x => x.TransplantProductionLaborActivityName.ToLowerTrim().Trim() == transplantProductionLaborActivityCreateDto.TransplantProductionLaborActivityName.ToLowerTrim().Trim()))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity Name", Message = "This TP  Labor Activity name is already being used. Use a different TP Labor Activity name." });
            }

            if (string.IsNullOrEmpty(transplantProductionLaborActivityCreateDto.TransplantProductionLaborActivityName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity Name", Message = "TP Labor Activities must have a name." });
            }

            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionLaborActivityDto transplantProductionLaborActivityDto)
        {
            var result = new List<ErrorMessage>();

            var userTransplantProductionLaborActivitiesForWorkbook = GetDtoListByWorkbookID(dbContext, transplantProductionLaborActivityDto.Workbook.WorkbookID).ToList();
            if (userTransplantProductionLaborActivitiesForWorkbook.Any(x => x.TransplantProductionLaborActivityName.ToLowerTrim() == transplantProductionLaborActivityDto.TransplantProductionLaborActivityName.ToLowerTrim() 
            && transplantProductionLaborActivityDto.TransplantProductionLaborActivityID != x.TransplantProductionLaborActivityID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity Name", Message = "This TP  Labor Activity name is already being used. Use a different TP Labor Activity name." });
            }

            if (string.IsNullOrEmpty(transplantProductionLaborActivityDto.TransplantProductionLaborActivityName))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity Name", Message = "TP Labor Activities must have a name." });
            }

            return result;
        }

        public static IQueryable<TransplantProductionLaborActivityDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var transplantProductionLaborActivities = GetTransplantProductionLaborActivityImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return transplantProductionLaborActivities.Select(x => x.AsDto());
        }

        public static IQueryable<TransplantProductionLaborActivityDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionLaborActivities = GetTransplantProductionLaborActivityImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionLaborActivities.Select(x => x.AsDto());
        }

        private static IQueryable<TransplantProductionLaborActivity> GetTransplantProductionLaborActivityImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionLaborActivities
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.TransplantProductionStandardTimes)
                .Include(x => x.TransplantProductionLaborActivityByCrops)
                .AsNoTracking();
        }

        public static TransplantProductionLaborActivityDto GetDtoByTransplantProductionLaborActivityID(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var transplantProductionLaborActivity = GetTransplantProductionLaborActivityImpl(dbContext).SingleOrDefault(x => x.TransplantProductionLaborActivityID == transplantProductionLaborActivityID);
            return transplantProductionLaborActivity?.AsDto();
        }

        public static TransplantProductionLaborActivityDto CreateNewTransplantProductionLaborActivity(OregonTilthDbContext dbContext, TransplantProductionLaborActivityCreateDto transplantProductionLaborActivityCreateDto, UserDto userDto)
        {
            var transplantProductionLaborActivity = new TransplantProductionLaborActivity
            {
               TransplantProductionLaborActivityName = transplantProductionLaborActivityCreateDto.TransplantProductionLaborActivityName,
               WorkbookID = transplantProductionLaborActivityCreateDto.WorkbookID
            };

            dbContext.TransplantProductionLaborActivities.Add(transplantProductionLaborActivity);
            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivity).Reload();

            return GetDtoByTransplantProductionLaborActivityID(dbContext,
                transplantProductionLaborActivity.TransplantProductionLaborActivityID);

        }

        public static TransplantProductionLaborActivityDto UpdateTransplantProductionLaborActivity(OregonTilthDbContext dbContext, TransplantProductionLaborActivityDto transplantProductionLaborActivityDto)
        {
            var transplantProductionLaborActivity = dbContext.TransplantProductionLaborActivities
                .Single(x => x.TransplantProductionLaborActivityID == transplantProductionLaborActivityDto.TransplantProductionLaborActivityID);

            transplantProductionLaborActivity.TransplantProductionLaborActivityName = transplantProductionLaborActivityDto.TransplantProductionLaborActivityName;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionLaborActivity).Reload();

            return GetDtoByTransplantProductionLaborActivityID(dbContext, transplantProductionLaborActivity.TransplantProductionLaborActivityID);
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var tpLaborActivity = GetTransplantProductionLaborActivityImpl(dbContext).Single(x =>
                x.TransplantProductionLaborActivityID == transplantProductionLaborActivityID);

            var result = new List<ErrorMessage>();

            if (tpLaborActivity.TransplantProductionStandardTimes.Any())
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity", Message = "Cannot delete a TP Labor Activity because it is used on the Transplant Production Time Studies form." });
            }

            if (tpLaborActivity.TransplantProductionLaborActivityByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Labor Activity", Message = "Cannot delete a TP Labor Activity because it is used on the TP Labor by Crop form." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionLaborActivityID)
        {
            var existingTransplantProductionLaborActivity = dbContext
                .TransplantProductionLaborActivities
                .FirstOrDefault(x => x.TransplantProductionLaborActivityID == transplantProductionLaborActivityID);

            if (existingTransplantProductionLaborActivity != null)
            {
                dbContext.TransplantProductionLaborActivities.Remove(existingTransplantProductionLaborActivity);
                dbContext.SaveChanges();
            }
        }
    }
}