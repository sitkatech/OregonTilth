//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionTrayType]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionTrayTypeDto
    {
        public int TransplantProductionTrayTypeID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string TransplantProductionTrayTypeName { get; set; }
    }

    public partial class TransplantProductionTrayTypeSimpleDto
    {
        public int TransplantProductionTrayTypeID { get; set; }
        public int WorkbookID { get; set; }
        public string TransplantProductionTrayTypeName { get; set; }
    }

}