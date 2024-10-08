using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("Workbook")]
[Index("UserID", "WorkbookName", Name = "AK_Workbook_UserID_WorkbookName", IsUnique = true)]
public partial class Workbook
{
    [Key]
    public int WorkbookID { get; set; }

    public int UserID { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime CreateDate { get; set; }

    [Required]
    [StringLength(255)]
    [Unicode(false)]
    public string WorkbookName { get; set; }

    [Column(TypeName = "money")]
    public decimal AverageHourlyWage { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal StandardUnitOfSpaceLength { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal StandardUnitOfSpaceWidth { get; set; }

    [InverseProperty("Workbook")]
    public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; } = new List<CropSpecificInfo>();

    [InverseProperty("Workbook")]
    public virtual ICollection<CropUnit> CropUnits { get; set; } = new List<CropUnit>();

    [InverseProperty("Workbook")]
    public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; } = new List<CropYieldInformation>();

    [InverseProperty("Workbook")]
    public virtual ICollection<Crop> Crops { get; set; } = new List<Crop>();

    [InverseProperty("Workbook")]
    public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; } = new List<FieldInputByCrop>();

    [InverseProperty("Workbook")]
    public virtual ICollection<FieldInputCost> FieldInputCosts { get; set; } = new List<FieldInputCost>();

    [InverseProperty("Workbook")]
    public virtual ICollection<FieldLaborActivity> FieldLaborActivities { get; set; } = new List<FieldLaborActivity>();

    [InverseProperty("Workbook")]
    public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; } = new List<FieldLaborByCrop>();

    [InverseProperty("Workbook")]
    public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; } = new List<FieldStandardTime>();

    [InverseProperty("Workbook")]
    public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; } = new List<HarvestPostHarvestStandardTime>();

    [InverseProperty("Workbook")]
    public virtual ICollection<Machinery> Machineries { get; set; } = new List<Machinery>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TimeStudy> TimeStudies { get; set; } = new List<TimeStudy>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; } = new List<TransplantProductionInformation>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; } = new List<TransplantProductionInputCost>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionInput> TransplantProductionInputs { get; set; } = new List<TransplantProductionInput>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionLaborActivity> TransplantProductionLaborActivities { get; set; } = new List<TransplantProductionLaborActivity>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; } = new List<TransplantProductionLaborActivityByCrop>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; } = new List<TransplantProductionStandardTime>();

    [InverseProperty("Workbook")]
    public virtual ICollection<TransplantProductionTrayType> TransplantProductionTrayTypes { get; set; } = new List<TransplantProductionTrayType>();

    [ForeignKey("UserID")]
    [InverseProperty("Workbooks")]
    public virtual User User { get; set; }
}
