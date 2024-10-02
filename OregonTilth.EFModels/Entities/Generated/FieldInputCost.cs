using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldInputCost")]
    public partial class FieldInputCost
    {
        public FieldInputCost()
        {
            FieldInputByCrops = new HashSet<FieldInputByCrop>();
        }

        [Key]
        public int FieldInputCostID { get; set; }
        public int WorkbookID { get; set; }
        public int FieldUnitTypeID { get; set; }
        [Required]
        [StringLength(200)]
        [Unicode(false)]
        public string FieldInputCostName { get; set; }
        [Column(TypeName = "money")]
        public decimal CostPerFieldUnit { get; set; }
        [StringLength(2000)]
        [Unicode(false)]
        public string Notes { get; set; }

        [ForeignKey("FieldUnitTypeID")]
        [InverseProperty("FieldInputCosts")]
        public virtual FieldUnitType FieldUnitType { get; set; }
        [ForeignKey("WorkbookID")]
        [InverseProperty("FieldInputCosts")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("FieldInputCost")]
        public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; }
    }
}
