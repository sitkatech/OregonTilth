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
                var selectedHarvestType = dbContext.HarvestTypes.Single(x => x.HarvestTypeID == createDto.HarvestTypeID);
                result.Add(new ErrorMessage() { Type = "Harvest Post Harvest Standard Time", Message = $"You've already started {selectedHarvestType.HarvestTypeDisplayName} Time Studies for this Crop and Crop Unit combination." });
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
                var selectedHarvestType = dbContext.HarvestTypes.Single(x => x.HarvestTypeID == harvestPostHarvestStandardTimeDto.HarvestType.HarvestTypeID);
                result.Add(new ErrorMessage() { Type = "Harvest Post Harvest Standard Time", Message = $"You've already started {selectedHarvestType.HarvestTypeDisplayName} Time Studies for this Crop and Crop Unit combination." });
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

        public static List<ErrorMessage> ValidateDelete(OregonTilthDbContext dbContext, int harvestPostHarvestStandardTimeID)
        {
            var result = new List<ErrorMessage>();

            var currentHarvestPostHarvestStandardTime = GetByID(dbContext, harvestPostHarvestStandardTimeID);
            var cropYieldInfos =
                CropYieldInformation.GetDtoListByWorkbookID(dbContext,
                    currentHarvestPostHarvestStandardTime.WorkbookID).ToList();

            if (cropYieldInfos.Any(x =>
                x.Crop.CropID == currentHarvestPostHarvestStandardTime.CropID &&
                x.CropUnit.CropUnitID == currentHarvestPostHarvestStandardTime.CropUnitID) && currentHarvestPostHarvestStandardTime.HarvestTypeID == (int)HarvestTypeEnum.Harvest)
            {
                result.Add(new ErrorMessage() { Type = "Harvest Post Harvest Standard Time", Message = $"Cannot delete this Harvest Time Study because it is used on the Crop Yield Info form." });
            }

            return result;
        }

        public static void Delete(OregonTilthDbContext dbContext, int harvestPostHarvestStandardTimeID)
        {
            var existingHarvestPostHarvestStandardTime = dbContext
                .HarvestPostHarvestStandardTimes.Include(x => x.TimeStudies)
                .SingleOrDefault(x => x.HarvestPostHarvestStandardTimeID == harvestPostHarvestStandardTimeID);

            if (existingHarvestPostHarvestStandardTime != null)
            {
                dbContext.TimeStudies.RemoveRange(existingHarvestPostHarvestStandardTime.TimeStudies);
                dbContext.HarvestPostHarvestStandardTimes.Remove(existingHarvestPostHarvestStandardTime);
                dbContext.SaveChanges();
            }
        }
    }
}