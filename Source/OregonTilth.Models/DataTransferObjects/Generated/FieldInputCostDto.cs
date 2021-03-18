//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputCost]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class FieldInputCostDto
    {
        public int FieldInputCostID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public FieldUnitTypeDto FieldUnitType { get; set; }
        public string FieldInputCostName { get; set; }
        public decimal CostPerFieldUnit { get; set; }
        public string Notes { get; set; }
    }
}