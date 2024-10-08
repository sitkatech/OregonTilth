using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("CropSpecificInfo")]
[Index("WorkbookID", "CropID", Name = "AK_CropSpecificInfo_WorkbookID_CropID", IsUnique = true)]
public partial class CropSpecificInfo
{
    [Key]
    public int CropSpecificInfoID { get; set; }

    public int CropID { get; set; }

    public int WorkbookID { get; set; }

    public int TpOrDsTypeID { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal RowsPerStandardWidth { get; set; }

    public int DripTapeRowsPerStandardWidth { get; set; }

    [Column(TypeName = "decimal(18, 4)")]
    public decimal? InRowSpacing { get; set; }

    [Column(TypeName = "money")]
    public decimal? SeedCostPerStandardUnitOfSpace { get; set; }

    [Column(TypeName = "money")]
    public decimal? TransplantProductionCostOutsourced { get; set; }

    [ForeignKey("CropID")]
    [InverseProperty("CropSpecificInfos")]
    public virtual Crop Crop { get; set; }

    [ForeignKey("WorkbookID")]
    [InverseProperty("CropSpecificInfos")]
    public virtual Workbook Workbook { get; set; }
}
