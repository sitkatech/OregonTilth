using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionLaborActivityByCropSummaryDto
    {
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public TransplantProductionLaborActivitySummaryDto TransplantProductionLaborActivity { get; set; }
        public CropSummaryDto Crop { get; set; }
        public PhaseDto Phase { get; set; }
        public decimal Occurrances { get; set; }
    }

    
}