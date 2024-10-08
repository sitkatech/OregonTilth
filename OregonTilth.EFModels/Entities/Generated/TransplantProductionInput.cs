using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("TransplantProductionInput")]
[Index("TransplantProductionInputName", "WorkbookID", Name = "AK_TransplantProductionInput_TransplantProductionInputName_WorkbookID", IsUnique = true)]
public partial class TransplantProductionInput
{
    [Key]
    public int TransplantProductionInputID { get; set; }

    public int WorkbookID { get; set; }

    [Required]
    [StringLength(100)]
    [Unicode(false)]
    public string TransplantProductionInputName { get; set; }

    [InverseProperty("TransplantProductionInput")]
    public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; } = new List<TransplantProductionInputCost>();

    [ForeignKey("WorkbookID")]
    [InverseProperty("TransplantProductionInputs")]
    public virtual Workbook Workbook { get; set; }
}
