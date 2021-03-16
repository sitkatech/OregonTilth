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
        public int FieldInputByCostID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Occurances { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("FieldInputByCrops")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(FieldInputByCostID))]
        [InverseProperty(nameof(FieldInputCost.FieldInputByCrops))]
        public virtual FieldInputCost FieldInputByCost { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldInputByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
