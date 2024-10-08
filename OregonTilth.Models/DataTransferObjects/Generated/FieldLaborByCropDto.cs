//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborByCrop]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldLaborByCropDto
    {
        public int FieldLaborByCropID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public CropDto Crop { get; set; }
        public decimal? Occurrences { get; set; }
        public FieldStandardTimeDto FieldStandardTime { get; set; }
        public string Notes { get; set; }
    }

    public partial class FieldLaborByCropSimpleDto
    {
        public int FieldLaborByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public decimal? Occurrences { get; set; }
        public int FieldStandardTimeID { get; set; }
        public string Notes { get; set; }
    }

}