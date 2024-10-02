using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("TpOrDsType")]
    [Index("TpOrDsTypeDisplayName", Name = "AK_TpOrDsType_TpOrDsTypeDisplayName", IsUnique = true)]
    [Index("TpOrDsTypeName", Name = "AK_TpOrDsType_TpOrDsTypeName", IsUnique = true)]
    public partial class TpOrDsType
    {
        public TpOrDsType()
        {
            CropSpecificInfos = new HashSet<CropSpecificInfo>();
        }

        [Key]
        public int TpOrDsTypeID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string TpOrDsTypeName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string TpOrDsTypeDisplayName { get; set; }

        [InverseProperty("TpOrDsType")]
        public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; }
    }
}
