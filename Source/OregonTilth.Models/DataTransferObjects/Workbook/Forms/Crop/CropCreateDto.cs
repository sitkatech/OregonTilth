using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class CropCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public string CropName { get; set; }
    }
}