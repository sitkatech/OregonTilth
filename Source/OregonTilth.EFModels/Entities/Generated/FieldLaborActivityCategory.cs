using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborActivityCategory")]
    [Index(nameof(FieldLaborActivityCategoryDisplayName), Name = "AK_FieldLaborActivityCategory_FieldLaborActivityCategoryDisplayName", IsUnique = true)]
    [Index(nameof(FieldLaborActivityCategoryName), Name = "AK_FieldLaborActivityCategory_FieldLaborActivityCategoryName", IsUnique = true)]
    public partial class FieldLaborActivityCategory
    {
        public FieldLaborActivityCategory()
        {
            FieldLaborActivities = new HashSet<FieldLaborActivity>();
        }

        [Key]
        public int FieldLaborActivityCategoryID { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldLaborActivityCategoryName { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldLaborActivityCategoryDisplayName { get; set; }

        [InverseProperty(nameof(FieldLaborActivity.FieldLaborActivityCategory))]
        public virtual ICollection<FieldLaborActivity> FieldLaborActivities { get; set; }
    }
}
