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

    public partial class HarvestPostHarvestStandardTimeSimpleDto
    {
        public int HarvestPostHarvestStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int CropUnitID { get; set; }
        public int HarvestTypeID { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }

}