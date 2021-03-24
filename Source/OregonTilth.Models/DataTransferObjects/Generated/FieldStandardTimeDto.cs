//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldStandardTime]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldStandardTimeDto
    {
        public int FieldStandardTimeID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public FieldLaborActivityDto FieldLaborActivity { get; set; }
        public LaborTypeDto LaborType { get; set; }
        public MachineryDto Machinery { get; set; }
        public FieldUnitTypeDto FieldUnitType { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }
}