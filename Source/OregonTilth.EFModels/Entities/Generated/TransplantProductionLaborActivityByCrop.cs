using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionLaborActivityByCrop")]
    [Index(nameof(WorkbookID), nameof(CropID), nameof(TransplantProductionLaborActivityID), nameof(PhaseID), Name = "AK_TransplantProductionLaborActivityByCrop_WorkbookID_CropID_TransplantProductionLaborActivityID_LaborTypeID", IsUnique = true)]
    public partial class TransplantProductionLaborActivityByCrop
    {
        [Key]
        public int TransplantProductionLaborActivityByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int TransplantProductionLaborActivityID { get; set; }
        public int PhaseID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Occurrances { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(PhaseID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual Phase Phase { get; set; }
        [ForeignKey(nameof(TransplantProductionLaborActivityID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual TransplantProductionLaborActivity TransplantProductionLaborActivity { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionLaborActivityByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
