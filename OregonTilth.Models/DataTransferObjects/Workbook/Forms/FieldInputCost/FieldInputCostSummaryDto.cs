using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldInputCostSummaryDto
    {
        public int FieldInputCostID { get; set; }
        //public WorkbookSummaryDto Workbook { get; set; }
        //public FieldUnitTypeDto FieldUnitType { get; set; }
        public int WorkbookID { get; set; }
        public int FieldUnitTypeID { get; set; }
        public string FieldInputCostName { get; set; }
        public decimal CostPerFieldUnit { get; set; }
        public string Notes { get; set; }

    }
}