using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldInputByCost")]
    public partial class FieldInputByCost
    {
        [Key]
        public int FieldInputByCostID { get; set; }
        public int WorkbookID { get; set; }
        public int FieldUnitTypeID { get; set; }
        [Required]
        [StringLength(200)]
        public string FieldInputName { get; set; }
        [Column(TypeName = "money")]
        public decimal CostPerFieldUnit { get; set; }
        [StringLength(2000)]
        public string Notes { get; set; }

        [ForeignKey(nameof(FieldUnitTypeID))]
        [InverseProperty("FieldInputByCosts")]
        public virtual FieldUnitType FieldUnitType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldInputByCosts")]
        public virtual Workbook Workbook { get; set; }
    }
}
