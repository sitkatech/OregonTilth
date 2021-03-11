using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace OregonTilth.Models.DataTransferObjects
{
    public class MachineryUpsertDto
    {
        [Required]
        public string MachineryName { get; set; }
        [Required]
        public decimal StandardMachineryCost { get; set; }

        [Required] 
        public int WorkbookID { get; set; }
    }
}