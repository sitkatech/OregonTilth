using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionStandardTime
    {
        public static IEnumerable<TransplantProductionStandardTimeSummaryDto> GetTransplantProductionStandardTimeSummaryDtos(OregonTilthDbContext dbContext)
        {
            var transplantProductionStandardTimes = dbContext.TransplantProductionStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.TransplantProductionLaborActivity)
                .Include(x => x.TransplantProductionTrayType)
                .Include(x => x.TimeStudies)
                .ToList();

            var transplantProductionStandardTimeSummaryDtos = new List<TransplantProductionStandardTimeSummaryDto>();

            foreach (var transplantProductionStandardTime in transplantProductionStandardTimes)
            {
                transplantProductionStandardTimeSummaryDtos.Add(transplantProductionStandardTime.AsSummaryDto());
            }
            return transplantProductionStandardTimeSummaryDtos;
        }

        public static TransplantProductionStandardTimeSummaryDto CreateNew(OregonTilthDbContext dbContext, TransplantProductionStandardTimeCreateDto createDto)
        {
            var newRecord = new TransplantProductionStandardTime()
            {
                WorkbookID = createDto.WorkbookID,
                TransplantProductionLaborActivityID = createDto.TransplantProductionLaborActivityID,
                TransplantProductionTrayTypeID = createDto.TransplantProductionTrayTypeID,
            };

            dbContext.TransplantProductionStandardTimes.Add(newRecord);
            dbContext.SaveChanges();
            dbContext.Entry(newRecord).Reload();

            return GetTransplantProductionStandardTimeSummaryDtos(dbContext)
                .Single(x => x.TransplantProductionStandardTimeID == newRecord.TransplantProductionStandardTimeID);
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, TransplantProductionStandardTimeCreateDto createDto)
        {
            var result = new List<ErrorMessage>();

            var currentTransplantProductionStandardTimes = GetDtoListByWorkbookID(dbContext, createDto.WorkbookID);

            if (currentTransplantProductionStandardTimes.Any(x =>
                x.TransplantProductionLaborActivity.TransplantProductionLaborActivityID == createDto.TransplantProductionLaborActivityID
                && x.TransplantProductionTrayType.TransplantProductionTrayTypeID == createDto.TransplantProductionTrayTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Standard Time", Message = "Standard times must be unique per Activity and Tray Type." });
            }



            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, TransplantProductionStandardTimeDto transplantProductionStandardTimeDto)
        {
            var result = new List<ErrorMessage>();


            var currentTransplantProductionStandardTimes = GetDtoListByWorkbookID(dbContext, transplantProductionStandardTimeDto.Workbook.WorkbookID);

            if (currentTransplantProductionStandardTimes.Any(x =>
                x.TransplantProductionLaborActivity.TransplantProductionLaborActivityID == transplantProductionStandardTimeDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID
                && x.TransplantProductionTrayType.TransplantProductionTrayTypeID == transplantProductionStandardTimeDto.TransplantProductionTrayType.TransplantProductionTrayTypeID
                && x.TransplantProductionStandardTimeID != transplantProductionStandardTimeDto.TransplantProductionStandardTimeID))
            {
                result.Add(new ErrorMessage() { Type = "Transplant Production Standard Time", Message = "Standard times must be unique per Activity and Tray Type." });
            }

            return result;
        }

        public static IEnumerable<TransplantProductionStandardTimeSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var transplantProductionStandardTimes = GetTransplantProductionStandardTimeSummaryDtos(dbContext).Where(x => x.WorkbookID == workbookID);
            return transplantProductionStandardTimes;
        }

        public static TransplantProductionStandardTimeSummaryDto UpdateTransplantProductionStandardTime(OregonTilthDbContext dbContext, TransplantProductionStandardTimeDto transplantProductionStandardTimeDto)
        {
            var transplantProductionStandardTime = dbContext.TransplantProductionStandardTimes
                .Single(x => x.TransplantProductionStandardTimeID == transplantProductionStandardTimeDto.TransplantProductionStandardTimeID);

            transplantProductionStandardTime.StandardTimePerUnit = transplantProductionStandardTimeDto.StandardTimePerUnit;
            transplantProductionStandardTime.TransplantProductionLaborActivityID = transplantProductionStandardTimeDto.TransplantProductionLaborActivity.TransplantProductionLaborActivityID;
            transplantProductionStandardTime.TransplantProductionTrayTypeID = transplantProductionStandardTimeDto.TransplantProductionTrayType.TransplantProductionTrayTypeID;

            dbContext.SaveChanges();
            dbContext.Entry(transplantProductionStandardTime).Reload();

            return GetTransplantProductionStandardTimeSummaryDtos(dbContext).Single(x => x.TransplantProductionStandardTimeID == transplantProductionStandardTime.TransplantProductionStandardTimeID);
        }

        public static TransplantProductionStandardTime GetByID(OregonTilthDbContext dbContext, int tpStandardTimeID)
        {
            return GetTransplantProductionStandardTimesImpl(dbContext).Single(x => x.TransplantProductionStandardTimeID == tpStandardTimeID);
        }

        private static IQueryable<TransplantProductionStandardTime> GetTransplantProductionStandardTimesImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.TransplantProductionStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.TransplantProductionTrayType)
                .Include(x => x.TransplantProductionLaborActivity)
                .Include(x => x.TimeStudies);
        }

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int tpStandardTimeID)
        {
            var result = new List<ErrorMessage>();
            var existingTPStandardTime = dbContext
                .TransplantProductionStandardTimes.Include(x => x.TimeStudies)
                .Include(x => x.TransplantProductionLaborActivity).ThenInclude(x => x.TransplantProductionLaborActivityByCrops)
                .Single(x => x.TransplantProductionStandardTimeID == tpStandardTimeID);

            if (existingTPStandardTime.TransplantProductionLaborActivity.TransplantProductionLaborActivityByCrops.Any())
            {
                result.Add(new ErrorMessage() { Type = "Validation Error", Message = "Cannot delete a time study with a Labor Activity in use on the TP Labor Activity by Crop form." });
            }


            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int transplantProductionStandardTimeID)
        {
            var existingTPStandardTime = dbContext
                .TransplantProductionStandardTimes.Include(x => x.TimeStudies)
                .SingleOrDefault(x => x.TransplantProductionStandardTimeID == transplantProductionStandardTimeID);

            if (existingTPStandardTime != null)
            {
                dbContext.TimeStudies.RemoveRange(existingTPStandardTime.TimeStudies);
                dbContext.TransplantProductionStandardTimes.Remove(existingTPStandardTime);
                dbContext.SaveChanges();
            }
        }
    }
}