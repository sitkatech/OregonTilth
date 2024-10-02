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
        public bool LaborTypeManual { get; set; }
        public bool LaborTypeMachinery { get; set; }
    }

    public partial class FieldLaborActivitySimpleDto
    {
        public int FieldLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        public string FieldLaborActivityName { get; set; }
        public int FieldLaborActivityCategoryID { get; set; }
        public bool LaborTypeManual { get; set; }
        public bool LaborTypeMachinery { get; set; }
    }

}