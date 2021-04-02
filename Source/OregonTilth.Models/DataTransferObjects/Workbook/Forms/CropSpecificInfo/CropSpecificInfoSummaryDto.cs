namespace OregonTilth.Models.DataTransferObjects
{
    public class CropSpecificInfoSummaryDto 
    {
        public int? CropSpecificInfoID { get; set; }
        public int WorkbookID { get; set; }
        public CropSummaryDto Crop { get; set; }
        public TpOrDsTypeDto TpOrDsType { get; set; }
        public int RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public int? InRowSpacing { get; set; }
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal? TransplantProductionCostOutsourced { get; set; }
    }
}