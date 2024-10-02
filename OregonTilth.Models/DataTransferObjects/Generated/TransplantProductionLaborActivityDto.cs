//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivity]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionLaborActivityDto
    {
        public int TransplantProductionLaborActivityID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string TransplantProductionLaborActivityName { get; set; }
    }

    public partial class TransplantProductionLaborActivitySimpleDto
    {
        public int TransplantProductionLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        public string TransplantProductionLaborActivityName { get; set; }
    }

}