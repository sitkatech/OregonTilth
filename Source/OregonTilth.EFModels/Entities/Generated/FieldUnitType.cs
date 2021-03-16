using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldUnitType")]
    [Index(nameof(FieldUnitTypeDisplayName), Name = "AK_FieldUnitType_FieldUnitTypeDisplayName", IsUnique = true)]
    [Index(nameof(FieldUnitTypeName), Name = "AK_FieldUnitType_FieldUnitTypeName", IsUnique = true)]
    public partial class FieldUnitType
    {
        public FieldUnitType()
        {
            FieldInputCosts = new HashSet<FieldInputCost>();
        }

        [Key]
        public int FieldUnitTypeID { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldUnitTypeName { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldUnitTypeDisplayName { get; set; }

        [InverseProperty(nameof(FieldInputCost.FieldUnitType))]
        public virtual ICollection<FieldInputCost> FieldInputCosts { get; set; }
    }
}
