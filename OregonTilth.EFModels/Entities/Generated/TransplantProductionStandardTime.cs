using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("TransplantProductionStandardTime")]
[Index("WorkbookID", "TransplantProductionLaborActivityID", "TransplantProductionTrayTypeID", Name = "AK_TransplantProductionStandardTime_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionTrayTypeID", IsUnique = true)]
public partial class TransplantProductionStandardTime
{
    [Key]
    public int TransplantProductionStandardTimeID { get; set; }

    public int WorkbookID { get; set; }

    public int TransplantProductionLaborActivityID { get; set; }

    public int TransplantProductionTrayTypeID { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal? StandardTimePerUnit { get; set; }

    [InverseProperty("TransplantProductionStandardTime")]
    public virtual ICollection<TimeStudy> TimeStudies { get; set; } = new List<TimeStudy>();

    [ForeignKey("TransplantProductionLaborActivityID")]
    [InverseProperty("TransplantProductionStandardTimes")]
    public virtual TransplantProductionLaborActivity TransplantProductionLaborActivity { get; set; }

    [ForeignKey("TransplantProductionTrayTypeID")]
    [InverseProperty("TransplantProductionStandardTimes")]
    public virtual TransplantProductionTrayType TransplantProductionTrayType { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("TransplantProductionStandardTimes")]
    public virtual Workbook Workbook { get; set; }
}
