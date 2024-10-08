using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("Crop")]
[Index("CropName", "WorkbookID", Name = "AK_Crop_CropName_WorkbookID", IsUnique = true)]
public partial class Crop
{
    [Key]
    public int CropID { get; set; }

    public int WorkbookID { get; set; }

    [Required]
    [StringLength(100)]
    [Unicode(false)]
    public string CropName { get; set; }

    [InverseProperty("Crop")]
    public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; } = new List<CropSpecificInfo>();

    [InverseProperty("Crop")]
    public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; } = new List<CropYieldInformation>();

    [InverseProperty("Crop")]
    public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; } = new List<FieldInputByCrop>();

    [InverseProperty("Crop")]
    public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; } = new List<FieldLaborByCrop>();

    [InverseProperty("Crop")]
    public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; } = new List<HarvestPostHarvestStandardTime>();

    [InverseProperty("Crop")]
    public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; } = new List<TransplantProductionInformation>();

    [ForeignKey("WorkbookID")]
    [InverseProperty("Crops")]
    public virtual Workbook Workbook { get; set; }
}
