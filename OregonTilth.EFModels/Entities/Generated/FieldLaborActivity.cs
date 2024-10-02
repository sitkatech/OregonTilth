using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborActivity")]
    [Index("FieldLaborActivityName", "WorkbookID", Name = "AK_FieldLaborActivity_FieldLaborActivityName_WorkbookID", IsUnique = true)]
    public partial class FieldLaborActivity
    {
        public FieldLaborActivity()
        {
            FieldStandardTimes = new HashSet<FieldStandardTime>();
        }

        [Key]
        public int FieldLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string FieldLaborActivityName { get; set; }
        public int FieldLaborActivityCategoryID { get; set; }
        public bool LaborTypeManual { get; set; }
        public bool LaborTypeMachinery { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("FieldLaborActivities")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("FieldLaborActivity")]
        public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; }
    }
}
