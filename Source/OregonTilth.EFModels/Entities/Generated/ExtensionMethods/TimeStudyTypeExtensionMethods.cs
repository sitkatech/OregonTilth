//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TimeStudyType]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class TimeStudyTypeExtensionMethods
    {
        public static TimeStudyTypeDto AsDto(this TimeStudyType timeStudyType)
        {
            var timeStudyTypeDto = new TimeStudyTypeDto()
            {
                TimeStudyTypeID = timeStudyType.TimeStudyTypeID,
                TimeStudyTypeName = timeStudyType.TimeStudyTypeName,
                TimeStudyTypeDisplayName = timeStudyType.TimeStudyTypeDisplayName
            };
            DoCustomMappings(timeStudyType, timeStudyTypeDto);
            return timeStudyTypeDto;
        }

        static partial void DoCustomMappings(TimeStudyType timeStudyType, TimeStudyTypeDto timeStudyTypeDto);
    }
}