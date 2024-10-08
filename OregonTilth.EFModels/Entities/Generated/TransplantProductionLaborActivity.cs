using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionLaborActivity")]
    [Index("TransplantProductionLaborActivityName", "WorkbookID", Name = "AK_TransplantProductionLaborActivity_TransplantProductionLaborActivityName_WorkbookID", IsUnique = true)]
    public partial class TransplantProductionLaborActivity
    {
        public TransplantProductionLaborActivity()
        {
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
            TransplantProductionStandardTimes = new HashSet<TransplantProductionStandardTime>();
        }

        [Key]
        public int TransplantProductionLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string TransplantProductionLaborActivityName { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("TransplantProductionLaborActivities")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("TransplantProductionLaborActivity")]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
        [InverseProperty("TransplantProductionLaborActivity")]
        public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; }
    }
}
