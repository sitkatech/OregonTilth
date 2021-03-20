using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TpOrDsType")]
    [Index(nameof(TpOrDsTypeDisplayName), Name = "AK_TpOrDsType_TpOrDsTypeDisplayName", IsUnique = true)]
    [Index(nameof(TpOrDsTypeName), Name = "AK_TpOrDsType_TpOrDsTypeName", IsUnique = true)]
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
        public string TpOrDsTypeName { get; set; }
        [Required]
        [StringLength(100)]
        public string TpOrDsTypeDisplayName { get; set; }

        [InverseProperty(nameof(CropSpecificInfo.TpOrDsType))]
        public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; }
    }
}
