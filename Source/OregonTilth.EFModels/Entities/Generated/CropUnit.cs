using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("CropUnit")]
    [Index("CropUnitName", "WorkbookID", Name = "AK_CropUnit_CropUnitName_WorkbookID", IsUnique = true)]
    public partial class CropUnit
    {
        public CropUnit()
        {
            CropYieldInformations = new HashSet<CropYieldInformation>();
            HarvestPostHarvestStandardTimes = new HashSet<HarvestPostHarvestStandardTime>();
        }

        [Key]
        public int CropUnitID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string CropUnitName { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("CropUnits")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("CropUnit")]
        public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; }
        [InverseProperty("CropUnit")]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
    }
}
