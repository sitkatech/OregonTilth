using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionLaborActivityCreateDto
    {
        [Required]
        public string TransplantProductionLaborActivityName { get; set; }
        [Required] public int WorkbookID { get; set; }
    }
}