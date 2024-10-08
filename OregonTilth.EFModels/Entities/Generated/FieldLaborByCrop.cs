using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("FieldLaborByCrop")]
[Index("WorkbookID", "CropID", "FieldStandardTimeID", Name = "AK_FieldLaborByCrop_WorkbookID_CropID_FieldStandardTimeID", IsUnique = true)]
public partial class FieldLaborByCrop
{
    [Key]
    public int FieldLaborByCropID { get; set; }

    public int WorkbookID { get; set; }

    public int CropID { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal? Occurrences { get; set; }

    public int FieldStandardTimeID { get; set; }

    [StringLength(2000)]
    [Unicode(false)]
    public string Notes { get; set; }

    [ForeignKey("CropID")]
    [InverseProperty("FieldLaborByCrops")]
    public virtual Crop Crop { get; set; }

    [ForeignKey("FieldStandardTimeID")]
    [InverseProperty("FieldLaborByCrops")]
    public virtual FieldStandardTime FieldStandardTime { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("FieldLaborByCrops")]
    public virtual Workbook Workbook { get; set; }
}
