

using System.Collections.Generic;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionStandardTimeSummaryDto : IHasTimeStudies
    {
        public int? TransplantProductionStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public TransplantProductionLaborActivitySummaryDto TransplantProductionLaborActivity { get; set; }
        public TransplantProductionTrayTypeSummaryDto TransplantProductionTrayType { get; set; }
        public IEnumerable<TimeStudySummaryDto> TimeStudies { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }
}