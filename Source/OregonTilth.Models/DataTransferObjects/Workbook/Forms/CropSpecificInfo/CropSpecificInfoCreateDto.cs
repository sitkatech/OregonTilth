using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class CropSpecificInfoCreateDto
    {
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public CropSummaryDto Crop { get; set; }
        public int TpOrDsTypeID { get; set; }
        public TpOrDsTypeDto TpOrDsType { get; set; }
        public int? RowsPerStandardWidth { get; set; }
        public int DropTapeRowsPerStandardWidth { get; set; }
        public int? InRowSpacing { get; set; }
        public decimal SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal TransplantProductionCostOutsourced { get; set; }

    }
}
