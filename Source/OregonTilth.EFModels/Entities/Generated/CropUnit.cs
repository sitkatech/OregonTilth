using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("CropUnit")]
    [Index(nameof(CropUnitName), nameof(WorkbookID), Name = "AK_CropUnit_CropUnitName_WorkbookID", IsUnique = true)]
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
        public string CropUnitName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("CropUnits")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(CropYieldInformation.CropUnit))]
        public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; }
        [InverseProperty(nameof(HarvestPostHarvestStandardTime.CropUnit))]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
    }
}
