using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("TransplantProductionInformation")]
[Index("WorkbookID", "CropID", "PhaseID", Name = "AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID", IsUnique = true)]
public partial class TransplantProductionInformation
{
    [Key]
    public int TransplantProductionInformationID { get; set; }

    public int WorkbookID { get; set; }

    public int CropID { get; set; }

    public int PhaseID { get; set; }

    public int TransplantProductionTrayTypeID { get; set; }

    public int SeedsPerTray { get; set; }

    [Column(TypeName = "decimal(5, 2)")]
    public decimal UsageRate { get; set; }

    [Column(TypeName = "money")]
    public decimal? CostPerSeed { get; set; }

    [Column(TypeName = "money")]
    public decimal? CropSpecificInputCostsPerTray { get; set; }

    [ForeignKey("CropID")]
    [InverseProperty("TransplantProductionInformations")]
    public virtual Crop Crop { get; set; }

    [InverseProperty("TransplantProductionInformation")]
    public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; } = new List<TransplantProductionLaborActivityByCrop>();

    [ForeignKey("TransplantProductionTrayTypeID")]
    [InverseProperty("TransplantProductionInformations")]
    public virtual TransplantProductionTrayType TransplantProductionTrayType { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("TransplantProductionInformations")]
    public virtual Workbook Workbook { get; set; }
}
