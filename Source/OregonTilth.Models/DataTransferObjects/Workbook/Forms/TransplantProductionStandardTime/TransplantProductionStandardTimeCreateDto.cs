using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionStandardTimeCreateDto
    {
        [Required]
        public int WorkbookID { get; set; }
        [Required]
        public int TransplantProductionLaborActivityID { get; set; }
        [Required]
        public int TransplantProductionTrayTypeID { get; set; }
    }
}