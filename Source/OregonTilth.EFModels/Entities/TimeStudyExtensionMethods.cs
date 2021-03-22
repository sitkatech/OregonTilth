using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TimeStudyExtensionMethods
    {
        public static TimeStudySummaryDto AsSummaryDto(this TimeStudy timeStudy)
        {
            var timeStudyDto = new TimeStudySummaryDto()
            {
                TimeStudyID = timeStudy.TimeStudyID,
                WorkbookID = timeStudy.WorkbookID,
                FieldStandardTimeID = timeStudy.FieldStandardTimeID,
                Duration = timeStudy.Duration,
                Units = timeStudy.Units,
                Notes = timeStudy.Notes
            };
            return timeStudyDto;
        }

    }
}