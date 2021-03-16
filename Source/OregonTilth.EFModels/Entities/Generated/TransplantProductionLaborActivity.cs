using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionLaborActivity")]
    [Index(nameof(TransplantProductionLaborActivityName), nameof(WorkbookID), Name = "AK_TransplantProductionLaborActivity_TransplantProductionLaborActivityName_WorkbookID", IsUnique = true)]
    public partial class TransplantProductionLaborActivity
    {
        public TransplantProductionLaborActivity()
        {
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
        }

        [Key]
        public int TransplantProductionLaborActivityID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string TransplantProductionLaborActivityName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionLaborActivities")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TransplantProductionLaborActivityByCrop.TransplantProductionLaborActivity))]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
    }
}
