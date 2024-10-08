using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("FieldStandardTime")]
public partial class FieldStandardTime
{
    [Key]
    public int FieldStandardTimeID { get; set; }

    public int WorkbookID { get; set; }

    public int FieldLaborActivityID { get; set; }

    public int LaborTypeID { get; set; }

    public int? MachineryID { get; set; }

    public int? FieldUnitTypeID { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal? StandardTimePerUnit { get; set; }

    [ForeignKey("FieldLaborActivityID")]
    [InverseProperty("FieldStandardTimes")]
    public virtual FieldLaborActivity FieldLaborActivity { get; set; }

    [InverseProperty("FieldStandardTime")]
    public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; } = new List<FieldLaborByCrop>();

    [ForeignKey("MachineryID")]
    [InverseProperty("FieldStandardTimes")]
    public virtual Machinery Machinery { get; set; }

    [InverseProperty("FieldStandardTime")]
    public virtual ICollection<TimeStudy> TimeStudies { get; set; } = new List<TimeStudy>();

    [ForeignKey("WorkbookID")]
    [InverseProperty("FieldStandardTimes")]
    public virtual Workbook Workbook { get; set; }
}
