using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class HarvestPostHarvestStandardTime
    {
        public static IEnumerable<HarvestPostHarvestStandardTimeSummaryDto> GetHarvestPostHarvestStandardTimeSummaryDtos(OregonTilthDbContext dbContext)
        {
            var harvestPostHarvestStandardTimes = dbContext.HarvestPostHarvestStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.CropUnit)
                .Include(x => x.HarvestType)
                .Include(x => x.TimeStudies)
                .ToList();

            var harvestPostHarvestStandardTimeSummaryDtos = new List<HarvestPostHarvestStandardTimeSummaryDto>();

            foreach (var harvestPostHarvestStandardTime in harvestPostHarvestStandardTimes)
            {
                harvestPostHarvestStandardTimeSummaryDtos.Add(harvestPostHarvestStandardTime.AsSummaryDto());
            }
            return harvestPostHarvestStandardTimeSummaryDtos;
        }

        public static HarvestPostHarvestStandardTimeSummaryDto CreateNew(OregonTilthDbContext dbContext, HarvestPostHarvestStandardTimeCreateDto createDto)
        {
            var newRecord = new HarvestPostHarvestStandardTime()
            {
                WorkbookID = createDto.WorkbookID,
                CropID = createDto.CropID,
                CropUnitID = createDto.CropUnitID,
                HarvestTypeID = createDto.HarvestTypeID,
            };

            dbContext.HarvestPostHarvestStandardTimes.Add(newRecord);
            dbContext.SaveChanges();
            dbContext.Entry(newRecord).Reload();

            return GetHarvestPostHarvestStandardTimeSummaryDtos(dbContext)
                .Single(x => x.HarvestPostHarvestStandardTimeID == newRecord.HarvestPostHarvestStandardTimeID);
        }

        public static List<ErrorMessage> ValidateCreate(OregonTilthDbContext dbContext, HarvestPostHarvestStandardTimeCreateDto createDto)
        {
            var result = new List<ErrorMessage>();

            var currentHarvestPostHarvestStandardTimes = GetDtoListByWorkbookID(dbContext, createDto.WorkbookID);

            if (currentHarvestPostHarvestStandardTimes.Any(x =>
                x.Crop.CropID == createDto.CropID
                && x.CropUnit.CropUnitID == createDto.CropUnitID
                && x.HarvestType.HarvestTypeID == createDto.HarvestTypeID))
            {
                result.Add(new ErrorMessage() { Type = "Harvest Post Harvest Standard Time", Message = "Standard times must be unique per Crop, Crop Unit Harvest Type." });
            }



            return result;
        }

        public static List<ErrorMessage> ValidateUpdate(OregonTilthDbContext dbContext, HarvestPostHarvestStandardTimeDto harvestPostHarvestStandardTimeDto)
        {
            var result = new List<ErrorMessage>();


            var currentHarvestPostHarvestStandardTimes = GetDtoListByWorkbookID(dbContext, harvestPostHarvestStandardTimeDto.Workbook.WorkbookID);

            if (currentHarvestPostHarvestStandardTimes.Any(x =>
                x.Crop.CropID == harvestPostHarvestStandardTimeDto.Crop.CropID
                && x.CropUnit.CropUnitID == harvestPostHarvestStandardTimeDto.CropUnit.CropUnitID
                && x.HarvestType.HarvestTypeID == harvestPostHarvestStandardTimeDto.HarvestType.HarvestTypeID
                && x.HarvestPostHarvestStandardTimeID != harvestPostHarvestStandardTimeDto.HarvestPostHarvestStandardTimeID))
            {
                result.Add(new ErrorMessage() { Type = "Harvest Post Harvest Standard Time", Message = "Standard times must be unique per Crop, Crop Unit Harvest Type." });
            }

            return result;
        }

        public static IEnumerable<HarvestPostHarvestStandardTimeSummaryDto> GetDtoListByWorkbookID(OregonTilthDbContext dbContext, int workbookID)
        {
            var harvestPostHarvestStandardTimes = GetHarvestPostHarvestStandardTimeSummaryDtos(dbContext).Where(x => x.WorkbookID == workbookID);
            return harvestPostHarvestStandardTimes;
        }

        public static HarvestPostHarvestStandardTimeSummaryDto UpdateHarvestPostHarvestStandardTime(OregonTilthDbContext dbContext, HarvestPostHarvestStandardTimeDto harvestPostHarvestStandardTimeDto)
        {
            var harvestPostHarvestStandardTime = dbContext.HarvestPostHarvestStandardTimes
                .Single(x => x.HarvestPostHarvestStandardTimeID == harvestPostHarvestStandardTimeDto.HarvestPostHarvestStandardTimeID);

            harvestPostHarvestStandardTime.StandardTimePerUnit = harvestPostHarvestStandardTimeDto.StandardTimePerUnit;
            harvestPostHarvestStandardTime.CropID = harvestPostHarvestStandardTimeDto.Crop.CropID;
            harvestPostHarvestStandardTime.CropUnitID = harvestPostHarvestStandardTimeDto.CropUnit.CropUnitID;
            harvestPostHarvestStandardTime.HarvestTypeID = harvestPostHarvestStandardTimeDto.HarvestType.HarvestTypeID;

            dbContext.SaveChanges();
            dbContext.Entry(harvestPostHarvestStandardTime).Reload();

            return GetHarvestPostHarvestStandardTimeSummaryDtos(dbContext).Single(x => x.HarvestPostHarvestStandardTimeID == harvestPostHarvestStandardTime.HarvestPostHarvestStandardTimeID);
        }

        public static HarvestPostHarvestStandardTime GetByID(OregonTilthDbContext dbContext, int harvestPostHarvestStandardTimeID)
        {
            return GetHarvestPostHarvestStandardTimesImpl(dbContext).Single(x => x.HarvestPostHarvestStandardTimeID == harvestPostHarvestStandardTimeID);
        }

        private static IQueryable<HarvestPostHarvestStandardTime> GetHarvestPostHarvestStandardTimesImpl(OregonTilthDbContext dbContext)
        {
            return dbContext.HarvestPostHarvestStandardTimes
                .Include(x => x.Workbook).ThenInclude(x => x.User).ThenInclude(x => x.Role)
                .Include(x => x.Crop)
                .Include(x => x.CropUnit)
                .Include(x => x.HarvestType)
                .Include(x => x.TimeStudies);
        }
    }
}