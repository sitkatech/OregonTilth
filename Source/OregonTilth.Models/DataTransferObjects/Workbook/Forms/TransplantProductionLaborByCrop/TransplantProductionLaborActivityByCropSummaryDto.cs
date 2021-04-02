using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionLaborActivityByCropSummaryDto
    {
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public TransplantProductionLaborActivitySummaryDto TransplantProductionLaborActivity { get; set; }
        public TransplantProductionInformationSummaryDto TransplantProductionInformation { get; set; }
        public decimal? Occurrences { get; set; }
    }

    
}