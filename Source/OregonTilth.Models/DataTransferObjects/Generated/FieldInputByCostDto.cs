//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCost]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldInputByCostDto
    {
        public int FieldInputByCostID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public FieldUnitTypeDto FieldUnitType { get; set; }
        public string FieldInputName { get; set; }
        public decimal CostPerFieldUnit { get; set; }
        public string Notes { get; set; }
    }
}