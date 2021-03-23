//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TimeStudy]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TimeStudyDto
    {
        public int TimeStudyID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public FieldStandardTimeDto FieldStandardTime { get; set; }
        public int Duration { get; set; }
        public decimal Units { get; set; }
        public string Notes { get; set; }
    }
}