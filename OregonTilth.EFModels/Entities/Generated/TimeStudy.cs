using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("TimeStudy")]
    public partial class TimeStudy
    {
        [Key]
        public int TimeStudyID { get; set; }
        public int WorkbookID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Duration { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Units { get; set; }
        [StringLength(8000)]
        [Unicode(false)]
        public string Notes { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int? TransplantProductionStandardTimeID { get; set; }

        [ForeignKey("FieldStandardTimeID")]
        [InverseProperty("TimeStudies")]
        public virtual FieldStandardTime FieldStandardTime { get; set; }
        [ForeignKey("HarvestPostHarvestStandardTimeID")]
        [InverseProperty("TimeStudies")]
        public virtual HarvestPostHarvestStandardTime HarvestPostHarvestStandardTime { get; set; }
        [ForeignKey("TransplantProductionStandardTimeID")]
        [InverseProperty("TimeStudies")]
        public virtual TransplantProductionStandardTime TransplantProductionStandardTime { get; set; }
        [ForeignKey("WorkbookID")]
        [InverseProperty("TimeStudies")]
        public virtual Workbook Workbook { get; set; }
    }
}
