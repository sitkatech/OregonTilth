//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInput]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionInputDto
    {
        public int TransplantProductionInputID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string TransplantProductionInputName { get; set; }
    }

    public partial class TransplantProductionInputSimpleDto
    {
        public int TransplantProductionInputID { get; set; }
        public int WorkbookID { get; set; }
        public string TransplantProductionInputName { get; set; }
    }

}