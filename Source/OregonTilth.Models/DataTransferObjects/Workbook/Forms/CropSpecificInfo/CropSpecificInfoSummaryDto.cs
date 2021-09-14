namespace OregonTilth.Models.DataTransferObjects
{
    public class CropSpecificInfoSummaryDto 
    {
        public int? CropSpecificInfoID { get; set; }
        public int WorkbookID { get; set; }
        public CropSummaryDto Crop { get; set; }
        public TpOrDsTypeDto TpOrDsType { get; set; }
        public decimal RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public decimal? InRowSpacing { get; set; }
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal? TransplantProductionCostOutsourced { get; set; }
    }
}