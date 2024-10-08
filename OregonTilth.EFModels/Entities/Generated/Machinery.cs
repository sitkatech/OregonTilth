using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("Machinery")]
public partial class Machinery
{
    [Key]
    public int MachineryID { get; set; }

    public int WorkbookID { get; set; }

    [Required]
    [StringLength(200)]
    [Unicode(false)]
    public string MachineryName { get; set; }

    [Column(TypeName = "money")]
    public decimal StandardMachineryCost { get; set; }

    [StringLength(2000)]
    [Unicode(false)]
    public string Notes { get; set; }

    [InverseProperty("Machinery")]
    public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; } = new List<FieldStandardTime>();

    [ForeignKey("WorkbookID")]
    [InverseProperty("Machineries")]
    public virtual Workbook Workbook { get; set; }
}
