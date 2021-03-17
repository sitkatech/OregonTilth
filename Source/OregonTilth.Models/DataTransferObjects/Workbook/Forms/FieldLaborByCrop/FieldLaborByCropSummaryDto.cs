using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldLaborByCropSummaryDto
    {
        public int FieldLaborByCropID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public FieldLaborActivitySummaryDto FieldLaborActivity { get; set; }
        public CropSummaryDto Crop { get; set; }
        public LaborTypeDto LaborType { get; set; }
        public decimal Occurrences { get; set; }
    }
}