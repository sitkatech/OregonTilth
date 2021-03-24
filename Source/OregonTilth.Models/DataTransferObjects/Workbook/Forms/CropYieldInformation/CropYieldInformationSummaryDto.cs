namespace OregonTilth.Models.DataTransferObjects
{
    public class CropYieldInformationSummaryDto
    {
        public int? CropYieldInformationID { get; set; }
        public int WorkbookID { get; set; }
        public CropSummaryDto Crop { get; set; }
        public CropUnitSummaryDto CropUnit { get; set; }
        public decimal HarvestedYieldPerStandardUnitOfSpace { get; set; }
        public decimal MarketableYieldPerStandardUnitOfSpace { get; set; }
        public decimal PackagingCostPerCropUnit { get; set; }
        public decimal PricePerCropUnit { get; set; }

    }
}