using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborActivity")]
    [Index(nameof(FieldLaborActivityName), nameof(WorkbookID), Name = "AK_FieldLaborActivity_FieldLaborActivityName_WorkbookID", IsUnique = true)]
    public partial class FieldLaborActivity
    {
        [Key]
        public int FieldLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldLaborActivityName { get; set; }
        public int FieldLaborActivityCategoryID { get; set; }

        [ForeignKey(nameof(FieldLaborActivityCategoryID))]
        [InverseProperty("FieldLaborActivities")]
        public virtual FieldLaborActivityCategory FieldLaborActivityCategory { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldLaborActivities")]
        public virtual Workbook Workbook { get; set; }
    }
}
