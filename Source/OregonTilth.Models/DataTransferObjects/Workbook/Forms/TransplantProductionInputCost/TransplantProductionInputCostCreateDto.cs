using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionInputCostCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int TransplantProductionInputID { get; set; }
        [Required] public int TransplantProductionTrayTypeID { get; set; }
        [Required] public decimal CostPerTray { get; set; }
        [Required] public string Notes { get; set; }
    }
}