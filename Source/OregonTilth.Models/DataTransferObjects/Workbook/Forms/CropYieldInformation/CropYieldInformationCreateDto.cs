using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class CropYieldInformationCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }
        [Required] public int CropUnitID { get; set; }
        [Required] public decimal HarvestedYieldPerStandardUnitOfSpace { get; set; }
        [Required] public decimal MarketableYieldPerStandardUnitOfSpace { get; set; }
        [Required] public decimal PackagingCostPerCropUnit { get; set; }
        [Required] public decimal PricePerCropUnit { get; set; }
    }
}