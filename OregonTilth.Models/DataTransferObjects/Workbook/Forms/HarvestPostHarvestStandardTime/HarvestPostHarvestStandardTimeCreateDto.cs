using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class HarvestPostHarvestStandardTimeCreateDto
    {
        [Required]
        public int WorkbookID { get; set; }
        [Required]
        public int CropID { get; set; }
        [Required]
        public int CropUnitID { get; set; }
        [Required]
        public int HarvestTypeID { get; set; }
    }
}