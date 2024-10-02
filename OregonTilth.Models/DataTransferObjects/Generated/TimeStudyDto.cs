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
        public decimal Duration { get; set; }
        public decimal Units { get; set; }
        public string Notes { get; set; }
        public HarvestPostHarvestStandardTimeDto HarvestPostHarvestStandardTime { get; set; }
        public TransplantProductionStandardTimeDto TransplantProductionStandardTime { get; set; }
    }

    public partial class TimeStudySimpleDto
    {
        public int TimeStudyID { get; set; }
        public int WorkbookID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        public decimal Duration { get; set; }
        public decimal Units { get; set; }
        public string Notes { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int? TransplantProductionStandardTimeID { get; set; }
    }

}