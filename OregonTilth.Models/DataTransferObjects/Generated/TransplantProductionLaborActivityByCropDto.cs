//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivityByCrop]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionLaborActivityByCropDto
    {
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public TransplantProductionLaborActivityDto TransplantProductionLaborActivity { get; set; }
        public decimal? Occurrences { get; set; }
        public TransplantProductionInformationDto TransplantProductionInformation { get; set; }
        public string Notes { get; set; }
    }

    public partial class TransplantProductionLaborActivityByCropSimpleDto
    {
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int TransplantProductionLaborActivityID { get; set; }
        public decimal? Occurrences { get; set; }
        public int TransplantProductionInformationID { get; set; }
        public string Notes { get; set; }
    }

}