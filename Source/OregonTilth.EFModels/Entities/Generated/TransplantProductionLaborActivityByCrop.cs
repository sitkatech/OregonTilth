using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionLaborActivityByCrop")]
    [Index(nameof(WorkbookID), nameof(TransplantProductionLaborActivityID), nameof(TransplantProductionInformationID), Name = "AK_TransplantProductionLaborActivityByCrop_WorkbookID_TransplantProductionLaborActivityID_TransplantProductionInformationID", IsUnique = true)]
    public partial class TransplantProductionLaborActivityByCrop
    {
        [Key]
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int TransplantProductionLaborActivityID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? Occurrences { get; set; }
        public int TransplantProductionInformationID { get; set; }
        [StringLength(2000)]
        public string Notes { get; set; }

        [ForeignKey(nameof(TransplantProductionInformationID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual TransplantProductionInformation TransplantProductionInformation { get; set; }
        [ForeignKey(nameof(TransplantProductionLaborActivityID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual TransplantProductionLaborActivity TransplantProductionLaborActivity { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
