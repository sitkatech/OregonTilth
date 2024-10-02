using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionInputCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public string TransplantProductionInputName { get; set; }
    }
}