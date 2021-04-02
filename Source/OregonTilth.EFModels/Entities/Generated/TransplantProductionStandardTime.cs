using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionStandardTime")]
    [Index(nameof(WorkbookID), nameof(TransplantProductionLaborActivityID), nameof(TransplantProductionTrayTypeID), Name = "AK_TransplantProductionStandardTime_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionTrayTypeID", IsUnique = true)]
    public partial class TransplantProductionStandardTime
    {
        public TransplantProductionStandardTime()
        {
            TimeStudies = new HashSet<TimeStudy>();
        }

        [Key]
        public int TransplantProductionStandardTimeID { get; set; }
        public int WorkbookID { get; set; }
        public int TransplantProductionLaborActivityID { get; set; }
        public int TransplantProductionTrayTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardTimePerUnit { get; set; }

        [ForeignKey(nameof(TransplantProductionLaborActivityID))]
        [InverseProperty("TransplantProductionStandardTimes")]
        public virtual TransplantProductionLaborActivity TransplantProductionLaborActivity { get; set; }
        [ForeignKey(nameof(TransplantProductionTrayTypeID))]
        [InverseProperty("TransplantProductionStandardTimes")]
        public virtual TransplantProductionTrayType TransplantProductionTrayType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionStandardTimes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TimeStudy.TransplantProductionStandardTime))]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
    }
}
