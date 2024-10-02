using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("LaborType")]
    [Index("LaborTypeDisplayName", Name = "AK_LaborType_LaborTypeDisplayName", IsUnique = true)]
    [Index("LaborTypeName", Name = "AK_LaborType_LaborTypeName", IsUnique = true)]
    public partial class LaborType
    {
        public LaborType()
        {
            FieldStandardTimes = new HashSet<FieldStandardTime>();
        }

        [Key]
        public int LaborTypeID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string LaborTypeName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string LaborTypeDisplayName { get; set; }

        [InverseProperty("LaborType")]
        public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; }
    }
}
