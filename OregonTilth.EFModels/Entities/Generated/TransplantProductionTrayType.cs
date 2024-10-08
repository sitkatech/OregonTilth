using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("TransplantProductionTrayType")]
[Index("TransplantProductionTrayTypeName", "WorkbookID", Name = "AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID", IsUnique = true)]
public partial class TransplantProductionTrayType
{
    [Key]
    public int TransplantProductionTrayTypeID { get; set; }

    public int WorkbookID { get; set; }

    [Required]
    [StringLength(100)]
    [Unicode(false)]
    public string TransplantProductionTrayTypeName { get; set; }

    [InverseProperty("TransplantProductionTrayType")]
    public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; } = new List<TransplantProductionInformation>();

    [InverseProperty("TransplantProductionTrayType")]
    public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; } = new List<TransplantProductionInputCost>();

    [InverseProperty("TransplantProductionTrayType")]
    public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; } = new List<TransplantProductionStandardTime>();

    [ForeignKey("WorkbookID")]
    [InverseProperty("TransplantProductionTrayTypes")]
    public virtual Workbook Workbook { get; set; }
}
