using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionTrayTypeCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public string TransplantProductionTrayTypeName { get; set; }
    }
}