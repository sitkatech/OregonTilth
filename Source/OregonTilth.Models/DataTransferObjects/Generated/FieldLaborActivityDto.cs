//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborActivity]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldLaborActivityDto
    {
        public int FieldLaborActivityID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string FieldLaborActivityName { get; set; }
        public FieldLaborActivityCategoryDto FieldLaborActivityCategory { get; set; }
    }
}