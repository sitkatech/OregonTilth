//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestPostHarvestStandardTime]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class HarvestPostHarvestStandardTimeDto
    {
        public int HarvestPostHarvestStandardTimeID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public CropUnitDto CropUnit { get; set; }
        public HarvestTypeDto HarvestType { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }
}