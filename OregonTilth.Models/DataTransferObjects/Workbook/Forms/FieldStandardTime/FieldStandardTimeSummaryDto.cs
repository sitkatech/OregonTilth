

using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldStandardTimeSummaryDto : IHasTimeStudies
    {
        public int? FieldStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public FieldLaborActivitySummaryDto FieldLaborActivity { get; set; }
        public LaborTypeDto LaborType { get; set; }
        public MachinerySummaryDto Machinery { get; set; }
        public FieldUnitTypeDto FieldUnitType { get; set; }
        public IEnumerable<TimeStudySummaryDto> TimeStudies { get; set; }
        
        public string FieldLaborActivityAndLaborTypeNameForDropdown { get; set; }

        public decimal AverageMinutesPerFieldUnit { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }
}