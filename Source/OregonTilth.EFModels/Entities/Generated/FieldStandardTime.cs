using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldStandardTime")]
    public partial class FieldStandardTime
    {
        public FieldStandardTime()
        {
            TimeStudies = new HashSet<TimeStudy>();
        }

        [Key]
        public int FieldStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int FieldLaborActivityID { get; set; }
        public int LaborTypeID { get; set; }
        public int MachineryID { get; set; }
        public int FieldUnitTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardTimePerUnit { get; set; }

        [ForeignKey(nameof(FieldLaborActivityID))]
        [InverseProperty("FieldStandardTimes")]
        public virtual FieldLaborActivity FieldLaborActivity { get; set; }
        [ForeignKey(nameof(FieldUnitTypeID))]
        [InverseProperty("FieldStandardTimes")]
        public virtual FieldUnitType FieldUnitType { get; set; }
        [ForeignKey(nameof(LaborTypeID))]
        [InverseProperty("FieldStandardTimes")]
        public virtual LaborType LaborType { get; set; }
        [ForeignKey(nameof(MachineryID))]
        [InverseProperty("FieldStandardTimes")]
        public virtual Machinery Machinery { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldStandardTimes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TimeStudy.FieldStandardTime))]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
    }
}
