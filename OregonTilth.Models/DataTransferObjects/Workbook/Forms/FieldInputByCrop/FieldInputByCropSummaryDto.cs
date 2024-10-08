using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldInputByCropSummaryDto
    {
        public int FieldInputByCropID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public CropSummaryDto Crop { get; set; }
        public FieldInputCostSummaryDto FieldInputCost { get; set; }
        public decimal? Occurrences { get; set; }
        public string Notes { get; set; }
    }
}