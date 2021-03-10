using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TimeStudy")]
    public partial class TimeStudy
    {
        [Key]
        public int TimeStudyID { get; set; }
        public int WorkbookID { get; set; }
        public int TimeStudyTypeID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        public int Duration { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal Units { get; set; }
        [StringLength(8000)]
        public string Notes { get; set; }

        [ForeignKey(nameof(TimeStudyTypeID))]
        [InverseProperty("TimeStudies")]
        public virtual TimeStudyType TimeStudyType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TimeStudies")]
        public virtual Workbook Workbook { get; set; }
    }
}
