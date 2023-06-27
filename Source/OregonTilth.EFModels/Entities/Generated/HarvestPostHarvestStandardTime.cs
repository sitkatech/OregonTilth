using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("HarvestPostHarvestStandardTime")]
    [Index("WorkbookID", "CropID", "CropUnitID", "HarvestTypeID", Name = "AK_HarvestPostHarvestStandardTime_WorkbookID_CropID_CropUnitID_HarvestTypeID", IsUnique = true)]
    public partial class HarvestPostHarvestStandardTime
    {
        public HarvestPostHarvestStandardTime()
        {
            TimeStudies = new HashSet<TimeStudy>();
        }

        [Key]
        public int HarvestPostHarvestStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int CropUnitID { get; set; }
        public int HarvestTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardTimePerUnit { get; set; }

        [ForeignKey("CropID")]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual Crop Crop { get; set; }
        [ForeignKey("CropUnitID")]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual CropUnit CropUnit { get; set; }
        [ForeignKey("HarvestTypeID")]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual HarvestType HarvestType { get; set; }
        [ForeignKey("WorkbookID")]
        [InverseProperty("HarvestPostHarvestStandardTimes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("HarvestPostHarvestStandardTime")]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
    }
}
