using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("CropSpecificInfo")]
    [Index(nameof(WorkbookID), nameof(CropID), Name = "AK_CropSpecificInfo_WorkbookID_CropID", IsUnique = true)]
    public partial class CropSpecificInfo
    {
        [Key]
        public int CropSpecificInfoID { get; set; }
        public int CropID { get; set; }
        public int WorkbookID { get; set; }
        public int TpOrDsTypeID { get; set; }
        public int? RowsPerStandardWidth { get; set; }
        public int DripTapeRowsPerStandardWidth { get; set; }
        public int? InRowSpacing { get; set; }
        [Column(TypeName = "money")]
        public decimal? SeedCostPerStandardUnitOfSpace { get; set; }
        [Column(TypeName = "money")]
        public decimal? TransplantProductionCostOutsourced { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("CropSpecificInfos")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(TpOrDsTypeID))]
        [InverseProperty("CropSpecificInfos")]
        public virtual TpOrDsType TpOrDsType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("CropSpecificInfos")]
        public virtual Workbook Workbook { get; set; }
    }
}
