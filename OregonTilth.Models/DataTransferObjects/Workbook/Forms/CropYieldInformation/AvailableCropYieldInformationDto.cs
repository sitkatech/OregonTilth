using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class AvailableCropYieldInformationDto
    {
        [Required] public int CropID { get; set; }
        [Required] public string CropName { get; set; }
        [Required] public int CropUnitID { get; set; }
        [Required] public string CropUnitName { get; set; }
    }
}