//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Machinery]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class MachineryDto
    {
        public int MachineryID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public string MachineryName { get; set; }
        public decimal StandardMachineryCost { get; set; }
        public string Notes { get; set; }
    }
}