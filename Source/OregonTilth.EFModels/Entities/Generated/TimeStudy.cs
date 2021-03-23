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
        public int? FieldStandardTimeID { get; set; }
        public int Duration { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal Units { get; set; }
        [StringLength(8000)]
        public string Notes { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int? TransplantProductionStandardTimeID { get; set; }

        [ForeignKey(nameof(FieldStandardTimeID))]
        [InverseProperty("TimeStudies")]
        public virtual FieldStandardTime FieldStandardTime { get; set; }
        [ForeignKey(nameof(HarvestPostHarvestStandardTimeID))]
        [InverseProperty("TimeStudies")]
        public virtual HarvestPostHarvestStandardTime HarvestPostHarvestStandardTime { get; set; }
        [ForeignKey(nameof(TransplantProductionStandardTimeID))]
        [InverseProperty("TimeStudies")]
        public virtual TransplantProductionStandardTime TransplantProductionStandardTime { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TimeStudies")]
        public virtual Workbook Workbook { get; set; }
    }
}
