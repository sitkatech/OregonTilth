using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("LaborType")]
    [Index(nameof(LaborTypeDisplayName), Name = "AK_LaborType_LaborTypeDisplayName", IsUnique = true)]
    [Index(nameof(LaborTypeName), Name = "AK_LaborType_LaborTypeName", IsUnique = true)]
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
        public string LaborTypeName { get; set; }
        [Required]
        [StringLength(100)]
        public string LaborTypeDisplayName { get; set; }

        [InverseProperty(nameof(FieldStandardTime.LaborType))]
        public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; }
    }
}
