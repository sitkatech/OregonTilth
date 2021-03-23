using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("HarvestPostHarvestStandardTime")]
    [Index(nameof(WorkbookID), nameof(CropID), nameof(CropUnitID), Name = "AK_HarvestPostHarvestStandardTime_WorkbookID_CropID_CropUnitID", IsUnique = true)]
    public partial class HarvestPostHarvestStandardTime
    {
        [Key]
        public int HarvestPostHarvestStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int CropUnitID { get; set; }
        public int HarvestTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardTimePerUnit { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(CropUnitID))]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual CropUnit CropUnit { get; set; }
        [ForeignKey(nameof(HarvestTypeID))]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual HarvestType HarvestType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual Workbook Workbook { get; set; }
    }
}
