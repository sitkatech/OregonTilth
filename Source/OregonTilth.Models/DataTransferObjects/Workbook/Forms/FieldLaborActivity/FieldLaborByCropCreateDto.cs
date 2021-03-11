using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldLaborByCropCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }
        [Required] public int FieldLaborActivityID { get; set; }
        [Required] public int LaborTypeID { get; set; }
        [Required] public decimal Occurrances { get; set; }
    }
}