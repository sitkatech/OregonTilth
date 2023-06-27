using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborActivityCategory")]
    [Index("FieldLaborActivityCategoryDisplayName", Name = "AK_FieldLaborActivityCategory_FieldLaborActivityCategoryDisplayName", IsUnique = true)]
    [Index("FieldLaborActivityCategoryName", Name = "AK_FieldLaborActivityCategory_FieldLaborActivityCategoryName", IsUnique = true)]
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
        [Unicode(false)]
        public string FieldLaborActivityCategoryName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string FieldLaborActivityCategoryDisplayName { get; set; }

        [InverseProperty("FieldLaborActivityCategory")]
        public virtual ICollection<FieldLaborActivity> FieldLaborActivities { get; set; }
    }
}
