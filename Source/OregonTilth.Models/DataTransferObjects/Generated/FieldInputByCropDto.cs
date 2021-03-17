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
        public FieldInputCostDto FieldInputByCost { get; set; }
        public decimal Occurrences { get; set; }
    }
}