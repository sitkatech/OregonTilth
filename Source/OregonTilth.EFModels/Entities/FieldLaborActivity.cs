using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldLaborActivity
    {
        public static IEnumerable<FieldLaborActivityDto> List(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldLaborActivities
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .AsNoTracking()
                .Select(x => FieldLaborActivityExtensionMethods.AsDto(x)).AsEnumerable();
        }

        public static List<ErrorMessage> ValidateUpsert(OregonTilthDbContext dbContext, FieldLaborActivityUpsertDto fieldLaborActivityUpsertDto)
        {
            var result = new List<ErrorMessage>();

            var userFieldLaborActivitiesForWorkbook = GetByWorkbookID(dbContext, fieldLaborActivityUpsertDto.WorkbookID).ToList();
            if (userFieldLaborActivitiesForWorkbook.Any(x => x.FieldLaborActivityName.ToLower() == fieldLaborActivityUpsertDto.FieldLaborActivityName.ToLower()))
            {
                result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activity Names must be unique within this workbook." });
            }

            if (string.IsNullOrEmpty(fieldLaborActivityUpsertDto.FieldLaborActivityName))
            {
                result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activities must have a name." });
            }

            return result;
        }

        public static IQueryable<FieldLaborActivityDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        {
            var fieldLaborActivities = GetFieldLaborActivityImpl(dbContext).Where(x => x.Workbook.UserID == userID);
            return fieldLaborActivities.Select(x => x.AsDto());
        }

        public static IQueryable<FieldLaborActivityDto> GetByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldLaborActivities = GetFieldLaborActivityImpl(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldLaborActivities.Select(x => x.AsDto());
        }

        private static IQueryable<FieldLaborActivity> GetFieldLaborActivityImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldLaborActivities
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldLaborActivityCategory)
                .AsNoTracking();
        }

        public static IQueryable<FieldLaborActivityDto> CreateNewFieldLaborActivity(OregonTilthDbContext dbContext, FieldLaborActivityUpsertDto fieldLaborActivityUpsertDto, UserDto userDtoUserID)
        {
            var fieldLaborActivity = new FieldLaborActivity
            {
               FieldLaborActivityName = fieldLaborActivityUpsertDto.FieldLaborActivityName,
               FieldLaborActivityCategoryID = fieldLaborActivityUpsertDto.FieldLaborActivityCategoryID,
               WorkbookID = fieldLaborActivityUpsertDto.WorkbookID
            };

            dbContext.FieldLaborActivities.Add(fieldLaborActivity);
            dbContext.SaveChanges();
            dbContext.Entry(fieldLaborActivity).Reload();

            return GetByUserID(dbContext, userDtoUserID.UserID);
        }
    }
}