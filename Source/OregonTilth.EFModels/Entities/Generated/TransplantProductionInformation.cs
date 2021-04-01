using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionInformation")]
    [Index(nameof(WorkbookID), nameof(CropID), nameof(PhaseID), nameof(TransplantProductionTrayTypeID), Name = "AK_TransplantProductionInformation_WorkbookID_CropID_PhaseID_TransplantProductionTrayTypeID", IsUnique = true)]
    public partial class TransplantProductionInformation
    {
        public TransplantProductionInformation()
        {
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
        }

        [Key]
        public int TransplantProductionInformationID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int PhaseID { get; set; }
        public int TransplantProductionTrayTypeID { get; set; }
        public int SeedsPerTray { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal UsageRate { get; set; }
        [Column(TypeName = "money")]
        public decimal? CostPerSeed { get; set; }
        [Column(TypeName = "money")]
        public decimal? CropSpecificInputCostsPerTray { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("TransplantProductionInformations")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(PhaseID))]
        [InverseProperty("TransplantProductionInformations")]
        public virtual Phase Phase { get; set; }
        [ForeignKey(nameof(TransplantProductionTrayTypeID))]
        [InverseProperty("TransplantProductionInformations")]
        public virtual TransplantProductionTrayType TransplantProductionTrayType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionInformations")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TransplantProductionLaborActivityByCrop.TransplantProductionInformation))]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
    }
}
