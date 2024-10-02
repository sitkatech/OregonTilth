//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Workbook]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class WorkbookDto
    {
        public int WorkbookID { get; set; }
        public UserDto User { get; set; }
        public DateTime CreateDate { get; set; }
        public string WorkbookName { get; set; }
        public decimal AverageHourlyWage { get; set; }
        public decimal StandardUnitOfSpaceLength { get; set; }
        public decimal StandardUnitOfSpaceWidth { get; set; }
    }
}