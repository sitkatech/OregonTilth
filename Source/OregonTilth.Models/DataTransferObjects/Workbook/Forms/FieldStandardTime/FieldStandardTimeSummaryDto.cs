using System.Collections;
using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldStandardTimeSummaryDto
    {
        public int? FieldStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public FieldLaborActivitySummaryDto FieldLaborActivity { get; set; }
        public IEnumerable<TimeStudyDto> TimeStudies { get; set; }
    }
}