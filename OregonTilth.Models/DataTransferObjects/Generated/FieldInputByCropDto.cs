//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCrop]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldInputByCropDto
    {
        public int FieldInputByCropID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public FieldInputCostDto FieldInputCost { get; set; }
        public decimal? Occurrences { get; set; }
        public string Notes { get; set; }
    }

    public partial class FieldInputByCropSimpleDto
    {
        public int FieldInputByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int FieldInputCostID { get; set; }
        public decimal? Occurrences { get; set; }
        public string Notes { get; set; }
    }

}