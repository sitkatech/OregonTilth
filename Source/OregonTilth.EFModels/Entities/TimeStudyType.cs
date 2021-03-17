using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public partial class TimeStudyType
    {
        public static IEnumerable<TimeStudyTypeDto> List(OregonTilthDbContext dbContext)
        {
            var timeStudyTypes = dbContext.TimeStudyTypes
                .AsNoTracking()
                .Select(x => TimeStudyTypeExtensionMethods.AsDto(x));

            return timeStudyTypes;
        }
        public static TimeStudyTypeDto GetByTimeStudyTypeID(OregonTilthDbContext dbContext, int timeStudyTypeID)
        {
            var timeStudyType = dbContext.TimeStudyTypes
                .AsNoTracking()
                .FirstOrDefault(x => x.TimeStudyTypeID == timeStudyTypeID);

            return timeStudyType?.AsDto();
        }
    }

    public enum TimeStudyTypeEnum
    {
        FieldStandardTime = 1,
        HarvestPostHarvestStandardTime = 2,
        TPStandardTime = 3
    }
}