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
            var fieldStandardTimes = GetFieldStandardTimesImpl(dbContext).ToList();

            var fieldStandardTimeSummaryDtos = new List<FieldStandardTimeSummaryDto>();
            foreach (var fieldStandardTime in fieldStandardTimes)
            {
                fieldStandardTimeSummaryDtos.Add(fieldStandardTime.AsSummaryDto());
            }
            return fieldStandardTimeSummaryDtos;
        }

        private static IQueryable<FieldStandardTime> GetFieldStandardTimesImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.FieldStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.FieldLaborActivity)
                .Include(x => x.FieldUnitType)
                .Include(x => x.Machinery)
                .Include(x => x.LaborType)
                .Include(x => x.TimeStudies);
        }

        public static FieldStandardTimeSummaryDto CreateNew(OregonTilthDbContext dbContext, FieldStandardTimeCreateDto createDto)
        {
            var newRecord = new FieldStandardTime()
            {
                WorkbookID = createDto.WorkbookID,
                FieldLaborActivityID = createDto.FieldLaborActivityID,
                LaborTypeID = createDto.LaborTypeID,
                MachineryID = createDto.MachineryID,
                FieldUnitTypeID = createDto.FieldUnitTypeID
            };

            dbContext.FieldStandardTimes.Add(newRecord);
            dbContext.SaveChanges();
            dbContext.Entry(newRecord).Reload();

            return GetFieldStandardTimeSummaryDtos(dbContext)
                .Single(x => x.FieldStandardTimeID == newRecord.FieldStandardTimeID);
        }
        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, FieldStandardTimeCreateDto createDto)
        {
            var result = new List<ErrorMessage>();

            var currentFieldStandardTimes = GetDtoListByWorkbookID(dbContext, createDto.WorkbookID);

            if (currentFieldStandardTimes.Any(x =>
                x.FieldLaborActivity.FieldLaborActivityID == createDto.FieldLaborActivityID &&
                x.LaborType.LaborTypeID == createDto.LaborTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Field Standard Time", Message = "A record for this Field Labor Activity and Labor Type has already been initiated." });
            }



            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, FieldStandardTimeDto fieldStandardTimeDto)
        {
            var result = new List<ErrorMessage>();

           

            return result;
        }

        public static FieldStandardTime GetByID(OregonTilthDbContext dbContext, int fieldStandardTimeID)
        {
            return GetFieldStandardTimesImpl(dbContext).Single(x => x.FieldStandardTimeID == fieldStandardTimeID);
        }

        public static IEnumerable<FieldStandardTimeSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var fieldStandardTimes = GetFieldStandardTimeSummaryDtos(dbContext).Where(x => x.WorkbookID == workbookID);
            return fieldStandardTimes;
        }

        public static FieldStandardTimeSummaryDto UpdateFieldStandardTime(OregonTilthDbContext dbContext, FieldStandardTimeDto fieldStandardTimeDto)
        {
            var fieldStandardTime = dbContext.FieldStandardTimes
                .Single(x => x.FieldStandardTimeID == fieldStandardTimeDto.FieldStandardTimeID);

            fieldStandardTime.StandardTimePerUnit = fieldStandardTimeDto.StandardTimePerUnit;
            fieldStandardTime.FieldUnitTypeID = fieldStandardTimeDto.FieldUnitType.FieldUnitTypeID;
            fieldStandardTime.MachineryID = fieldStandardTimeDto.Machinery?.MachineryID;

            dbContext.SaveChanges();
            dbContext.Entry(fieldStandardTime).Reload();

            return GetFieldStandardTimeSummaryDtos(dbContext).Single(x => x.FieldStandardTimeID == fieldStandardTime.FieldStandardTimeID);
        }

        
    }
}