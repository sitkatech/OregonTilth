//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionStandardTime]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionStandardTimeDto
    {
        public int TransplantProductionStandardTimeID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public TransplantProductionLaborActivityDto TransplantProductionLaborActivity { get; set; }
        public TransplantProductionTrayTypeDto TransplantProductionTrayType { get; set; }
        public decimal? StandardTimePerUnit { get; set; }
    }
}