using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("HarvestType")]
    [Index("HarvestTypeDisplayName", Name = "AK_HarvestType_HarvestTypeDisplayName", IsUnique = true)]
    [Index("HarvestTypeName", Name = "AK_HarvestType_HarvestTypeName", IsUnique = true)]
    public partial class HarvestType
    {
        public HarvestType()
        {
            HarvestPostHarvestStandardTimes = new HashSet<HarvestPostHarvestStandardTime>();
        }

        [Key]
        public int HarvestTypeID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string HarvestTypeName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string HarvestTypeDisplayName { get; set; }

        [InverseProperty("HarvestType")]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
    }
}
