//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropYieldInformation]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class CropYieldInformationDto
    {
        public int CropYieldInformationID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public CropUnitDto CropUnit { get; set; }
        public decimal HarvestedYieldPerStandardUnitOfSpace { get; set; }
        public decimal MarketableYieldPerStandardUnitOfSpace { get; set; }
        public decimal PackagingCostPerCropUnit { get; set; }
        public decimal PricePerCropUnit { get; set; }
    }
}