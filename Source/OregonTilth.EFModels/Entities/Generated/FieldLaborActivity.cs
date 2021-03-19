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
        public FieldLaborActivity()
        {
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            FieldStandardTimes = new HashSet<FieldStandardTime>();
        }

        [Key]
        public int FieldLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string FieldLaborActivityName { get; set; }
        public int FieldLaborActivityCategoryID { get; set; }
        [Required]
        public bool? LaborTypeCrew { get; set; }
        public bool LaborTypeOperator { get; set; }

        [ForeignKey(nameof(FieldLaborActivityCategoryID))]
        [InverseProperty("FieldLaborActivities")]
        public virtual FieldLaborActivityCategory FieldLaborActivityCategory { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldLaborActivities")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(FieldLaborByCrop.FieldLaborActivity))]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty(nameof(FieldStandardTime.FieldLaborActivity))]
        public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; }
    }
}
