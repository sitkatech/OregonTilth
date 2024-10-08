using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class CropUnitCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public string CropUnitName { get; set; }
    }
}