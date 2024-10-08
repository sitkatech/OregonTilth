using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

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
    [Unicode(false)]
    public string Notes { get; set; }

    [ForeignKey("CropID")]
    [InverseProperty("FieldInputByCrops")]
    public virtual Crop Crop { get; set; }

    [ForeignKey("FieldInputCostID")]
    [InverseProperty("FieldInputByCrops")]
    public virtual FieldInputCost FieldInputCost { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("FieldInputByCrops")]
    public virtual Workbook Workbook { get; set; }
}
