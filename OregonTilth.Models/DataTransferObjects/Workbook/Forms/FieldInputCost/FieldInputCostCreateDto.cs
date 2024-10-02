using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldInputCostCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int FieldUnitTypeID { get; set; }
        [Required] public string FieldInputCostName { get; set; }
        [Required] public decimal CostPerFieldUnit { get; set; }
        public string Notes { get; set; }

    }
}