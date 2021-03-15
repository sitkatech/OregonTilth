using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionLaborActivityByCropCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }
        [Required] public int TransplantProductionLaborActivityID { get; set; }
        [Required] public int PhaseID { get; set; }
        [Required] public decimal Occurrances { get; set; }
    }
}