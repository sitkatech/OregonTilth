using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionInputCost")]
    [Index(nameof(WorkbookID), nameof(TransplantProductionInputID), nameof(TransplantProductionTrayTypeID), Name = "AK_TransplantProductionInputCost_WorkbookID_TransplantProductionInputID_TransplantProductionTrayTypeID", IsUnique = true)]
    public partial class TransplantProductionInputCost
    {
        [Key]
        public int TransplantProductionInputCostID { get; set; }
        public int WorkbookID { get; set; }
        public int TransplantProductionInputID { get; set; }
        public int TransplantProductionTrayTypeID { get; set; }
        [Column(TypeName = "money")]
        public decimal CostPerTray { get; set; }
        [StringLength(2000)]
        public string Notes { get; set; }

        [ForeignKey(nameof(TransplantProductionInputID))]
        [InverseProperty("TransplantProductionInputCosts")]
        public virtual TransplantProductionInput TransplantProductionInput { get; set; }
        [ForeignKey(nameof(TransplantProductionTrayTypeID))]
        [InverseProperty("TransplantProductionInputCosts")]
        public virtual TransplantProductionTrayType TransplantProductionTrayType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionInputCosts")]
        public virtual Workbook Workbook { get; set; }
    }
}
