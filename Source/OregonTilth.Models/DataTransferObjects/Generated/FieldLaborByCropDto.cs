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
        public FieldLaborActivityDto FieldLaborActivity { get; set; }
        public LaborTypeDto LaborType { get; set; }
        public decimal Occurrances { get; set; }
    }
}