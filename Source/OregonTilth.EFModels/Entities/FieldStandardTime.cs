using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class FieldStandardTime
    {
        public static IEnumerable<FieldStandardTimeSummaryDto> GetFieldStandardTimeSummaryDtos(OregonTilthDbContext dbContext)
        {
            var fieldStandardTimes = dbContext.FieldStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldLaborActivity)
                .Include(x => x.FieldUnitType)
                .Include(x => x.Machinery)
                .Include(x => x.LaborType)
                .ToList();



            var fieldStandardTimeSummaryDtos = new List<FieldStandardTimeSummaryDto>();

            foreach (var fieldStandardTime in fieldStandardTimes)
            {
                
                fieldStandardTimeSummaryDtos.Add(new FieldStandardTimeSummaryDto()
                {
                    FieldStandardTimeID = fieldStandardTime?.FieldStandardTimeID,
                    WorkbookID = fieldStandardTime.WorkbookID,
                    FieldLaborActivity = fieldStandardTime.FieldLaborActivity.AsSummaryDto(),
                    LaborType = fieldStandardTime.LaborType.AsDto(),
                    Machinery = fieldStandardTime.Machinery.AsSummaryDto(),
                    FieldUnitType = fieldStandardTime.FieldUnitType.AsDto(),
                    // todo: something for this
                    AverageMinutesPerFieldUnit = 0,
                    StandardMinutesPerFieldUnit = fieldStandardTime.StandardTimePerUnit,
                    TimeStudies = fieldStandardTime?.TimeStudies.Select(x => x.AsDto())

                });
            }


            
            return fieldStandardTimeSummaryDtos;

        }

        //public static List<ErrorMessage> ValidateUpsert(OregonTilthDbContext dbContext, FieldLaborActivityUpsertDto fieldLaborActivityUpsertDto)
        //{
        //    var result = new List<ErrorMessage>();

        //    var userFieldLaborActivitiesForWorkbook = GetDtoListByWorkbookID(dbContext, fieldLaborActivityUpsertDto.WorkbookID).ToList();
        //    if (userFieldLaborActivitiesForWorkbook.Any(x => x.FieldLaborActivityName.ToLower() == fieldLaborActivityUpsertDto.FieldLaborActivityName.ToLower()))
        //    {
        //        result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activity Names must be unique within this workbook." });
        //    }

        //    if (string.IsNullOrEmpty(fieldLaborActivityUpsertDto.FieldLaborActivityName))
        //    {
        //        result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activities must have a name." });
        //    }

        //    return result;
        //}

        //public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldLaborActivityDto fieldLaborActivityDto)
        //{
        //    var result = new List<ErrorMessage>();

        //    var userFieldLaborActivitiesForWorkbook = GetDtoListByWorkbookID(dbContext, fieldLaborActivityDto.Workbook.WorkbookID).ToList();
        //    if (userFieldLaborActivitiesForWorkbook.Any(x => x.FieldLaborActivityName.ToLower() == fieldLaborActivityDto.FieldLaborActivityName.ToLower()
        //    && fieldLaborActivityDto.FieldLaborActivityID != x.FieldLaborActivityID))
        //    {
        //        result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activity Names must be unique within this workbook." });
        //    }

        //    if (string.IsNullOrEmpty(fieldLaborActivityDto.FieldLaborActivityName))
        //    {
        //        result.Add(new ErrorMessage() { Type = "Field Labor Activity Name", Message = "Field Labor Activities must have a name." });
        //    }

        //    return result;
        //}

        //public static IQueryable<FieldLaborActivityDto> GetByUserID(OregonTilthDbContext dbContext, int userID)
        //{
        //    var fieldLaborActivities = GetFieldLaborActivityImpl(dbContext).Where(x => x.Workbook.UserID == userID);
        //    return fieldLaborActivities.Select(x => x.AsDto());
        //}

        public static IEnumerable<FieldStandardTimeSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldStandardTimes = GetFieldStandardTimeSummaryDtos(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldStandardTimes;
        }

        //private static IQueryable<FieldLaborActivity> GetFieldLaborActivityImpl(OregonTilthDbContext dbContext)
        //{
        //    return dbContext.FieldLaborActivities
        //        .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
        //        .Include(x => x.FieldStandardTimes).ThenInclude(x => x.TimeStudies)
        //        .Include(x => x.FieldLaborActivityCategory)
        //        .AsNoTracking();
        //}

        //public static FieldLaborActivityDto GetDtoByFieldLaborActivityID(OregonTilthDbContext dbContext, int fieldLaborActivityID)
        //{
        //    var fieldLaborActivity = GetFieldLaborActivityImpl(dbContext).SingleOrDefault(x => x.FieldLaborActivityID == fieldLaborActivityID);
        //    return fieldLaborActivity?.AsDto();
        //}

        //public static IQueryable<FieldLaborActivityDto> CreateNewFieldLaborActivity(OregonTilthDbContext dbContext, FieldLaborActivityUpsertDto fieldLaborActivityUpsertDto, UserDto userDtoUserID)
        //{
        //    var fieldLaborActivity = new FieldLaborActivity
        //    {
        //        FieldLaborActivityName = fieldLaborActivityUpsertDto.FieldLaborActivityName,
        //        FieldLaborActivityCategoryID = fieldLaborActivityUpsertDto.FieldLaborActivityCategoryID,
        //        WorkbookID = fieldLaborActivityUpsertDto.WorkbookID
        //    };

        //    dbContext.FieldLaborActivities.Add(fieldLaborActivity);
        //    dbContext.SaveChanges();
        //    dbContext.Entry(fieldLaborActivity).Reload();

        //    return GetDtoListByWorkbookID(dbContext, fieldLaborActivityUpsertDto.WorkbookID);
        //}

        //public static FieldLaborActivityDto UpdateFieldLaborActivity(OregonTilthDbContext dbContext, FieldLaborActivityDto fieldLaborActivityDto)
        //{
        //    var fieldLaborActivity = dbContext.FieldLaborActivities
        //        .Include(x => x.FieldLaborActivityCategory)
        //        .Single(x => x.FieldLaborActivityID == fieldLaborActivityDto.FieldLaborActivityID);

        //    fieldLaborActivity.FieldLaborActivityCategoryID = fieldLaborActivityDto.FieldLaborActivityCategory.FieldLaborActivityCategoryID;
        //    fieldLaborActivity.FieldLaborActivityName = fieldLaborActivityDto.FieldLaborActivityName;

        //    dbContext.SaveChanges();
        //    dbContext.Entry(fieldLaborActivity).Reload();

        //    return GetDtoByFieldLaborActivityID(dbContext, fieldLaborActivity.FieldLaborActivityID);
        //}

        //// todo: validate deletion
        //public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int fieldLaborActivityID)
        //{
        //    var result = new List<ErrorMessage>();

        //    return result;
        //}

        //public static void Delete(OregonTilthDbContext dbContext, int fieldLaborActivityID)
        //{
        //    var existingFieldLaborActivity = dbContext
        //        .FieldLaborActivities
        //        .FirstOrDefault(x => x.FieldLaborActivityID == fieldLaborActivityID);

        //    if (existingFieldLaborActivity != null)
        //    {
        //        dbContext.FieldLaborActivities.Remove(existingFieldLaborActivity);
        //        dbContext.SaveChanges();
        //    }
        //}
    }
}