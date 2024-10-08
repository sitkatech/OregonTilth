using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("CropYieldInformation")]
[Index("WorkbookID", "CropID", "CropUnitID", Name = "AK_CropYieldInformation_WorkbookID_CropID_CropUnitID", IsUnique = true)]
public partial class CropYieldInformation
{
    [Key]
    public int CropYieldInformationID { get; set; }

    public int WorkbookID { get; set; }

    public int CropID { get; set; }

    public int CropUnitID { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal HarvestedYieldPerStandardUnitOfSpace { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal MarketableYieldPerStandardUnitOfSpace { get; set; }

    [Column(TypeName = "money")]
    public decimal PackagingCostPerCropUnit { get; set; }

    [Column(TypeName = "money")]
    public decimal PricePerCropUnit { get; set; }

    [ForeignKey("CropID")]
    [InverseProperty("CropYieldInformations")]
    public virtual Crop Crop { get; set; }

    [ForeignKey("CropUnitID")]
    [InverseProperty("CropYieldInformations")]
    public virtual CropUnit CropUnit { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("CropYieldInformations")]
    public virtual Workbook Workbook { get; set; }
}
