//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TimeStudy]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TimeStudyExtensionMethods
    {
        public static TimeStudyDto AsDto(this TimeStudy timeStudy)
        {
            var timeStudyDto = new TimeStudyDto()
            {
                TimeStudyID = timeStudy.TimeStudyID,
                Workbook = timeStudy.Workbook.AsDto(),
                FieldStandardTime = timeStudy.FieldStandardTime?.AsDto(),
                Duration = timeStudy.Duration,
                Units = timeStudy.Units,
                Notes = timeStudy.Notes
            };
            DoCustomMappings(timeStudy, timeStudyDto);
            return timeStudyDto;
        }

        static partial void DoCustomMappings(TimeStudy timeStudy, TimeStudyDto timeStudyDto);
    }
}