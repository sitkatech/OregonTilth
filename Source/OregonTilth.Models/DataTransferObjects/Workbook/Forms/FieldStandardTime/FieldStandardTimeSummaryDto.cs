using System.Collections;
using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldStandardTimeSummaryDto
    {
        public int? FieldStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public FieldLaborActivitySummaryDto FieldLaborActivity { get; set; }
        public LaborTypeDto LaborType { get; set; }
        public MachinerySummaryDto Machinery { get; set; }
        public FieldUnitTypeDto FieldUnitType { get; set; }
        public IEnumerable<TimeStudyDto> TimeStudies { get; set; }
        
        
        
        public decimal AverageMinutesPerFieldUnit { get; set; }
        public decimal? StandardMinutesPerFieldUnit { get; set; }
    }
}