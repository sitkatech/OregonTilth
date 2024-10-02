using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldStandardTime")]
    public partial class FieldStandardTime
    {
        public FieldStandardTime()
        {
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            TimeStudies = new HashSet<TimeStudy>();
        }

        [Key]
        public int FieldStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int FieldLaborActivityID { get; set; }
        public int LaborTypeID { get; set; }
        public int? MachineryID { get; set; }
        public int? FieldUnitTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardTimePerUnit { get; set; }

        [ForeignKey("FieldLaborActivityID")]
        [InverseProperty("FieldStandardTimes")]
        public virtual FieldLaborActivity FieldLaborActivity { get; set; }
        [ForeignKey("MachineryID")]
        [InverseProperty("FieldStandardTimes")]
        public virtual Machinery Machinery { get; set; }
        [ForeignKey("WorkbookID")]
        [InverseProperty("FieldStandardTimes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("FieldStandardTime")]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty("FieldStandardTime")]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
    }
}
