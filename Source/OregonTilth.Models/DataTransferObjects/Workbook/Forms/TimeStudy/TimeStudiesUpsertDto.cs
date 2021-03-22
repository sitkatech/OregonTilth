using System.ComponentModel.DataAnnotations;
using System.Dynamic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TimeStudiesUpsertDto
    {
        public TimeStudyDto TimeStudies { get; set; }
        public FieldStandardTimeSummaryDto FieldStandardTime { get; set; }
    }
}