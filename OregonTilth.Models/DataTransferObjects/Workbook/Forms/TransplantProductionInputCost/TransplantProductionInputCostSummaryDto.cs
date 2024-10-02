namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionInputCostSummaryDto
    {
        public int TransplantProductionInputCostID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public TransplantProductionInputSummaryDto TransplantProductionInput { get; set; }
        public TransplantProductionTrayTypeSummaryDto TransplantProductionTrayType { get; set; }
        public decimal CostPerTray { get; set; }
        public string Notes { get; set; }
    }
}