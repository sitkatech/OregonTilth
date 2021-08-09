using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldInputByCrop")]
    public partial class FieldInputByCrop
    {
        [Key]
        public int FieldInputByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int FieldInputCostID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? Occurrences { get; set; }
        [StringLength(2000)]
        public string Notes { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("FieldInputByCrops")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(FieldInputCostID))]
        [InverseProperty("FieldInputByCrops")]
        public virtual FieldInputCost FieldInputCost { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldInputByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
