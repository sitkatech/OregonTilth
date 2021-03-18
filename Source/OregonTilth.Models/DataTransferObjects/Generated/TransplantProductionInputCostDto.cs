//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInputCost]
using System;


namespace OregonTilth.Models.DataTransferObjects
{
    public partial class TransplantProductionInputCostDto
    {
        public int TransplantProductionInputCostID { get; set; }
        public WorkbookDto Workbook { get; set; }
        public TransplantProductionInputDto TransplantProductionInput { get; set; }
        public TransplantProductionTrayTypeDto TransplantProductionTrayType { get; set; }
        public decimal CostPerTray { get; set; }
        public string Notes { get; set; }
    }
}