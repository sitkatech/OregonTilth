//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropSpecificInfo]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class CropSpecificInfoDto
    {
        public int CropSpecificInfoID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public TpOrDsTypeDto TpOrDsType { get; set; }
        public int? RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public int? InRowSpacing { get; set; }
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal? TransplantProductionCostOutsourced { get; set; }
    }
}