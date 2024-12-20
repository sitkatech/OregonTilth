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
        public CropDto Crop { get; set; }
        public WorkbookDto Workbook { get; set; }
        public TpOrDsTypeDto TpOrDsType { get; set; }
        public decimal RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public decimal? InRowSpacing { get; set; }
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal? TransplantProductionCostOutsourced { get; set; }
    }

    public partial class CropSpecificInfoSimpleDto
    {
        public int CropSpecificInfoID { get; set; }
        public int CropID { get; set; }
        public int WorkbookID { get; set; }
        public int TpOrDsTypeID { get; set; }
        public decimal RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public decimal? InRowSpacing { get; set; }
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        public decimal? TransplantProductionCostOutsourced { get; set; }
    }

}