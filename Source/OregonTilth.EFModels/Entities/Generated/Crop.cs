using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("Crop")]
    [Index(nameof(CropName), nameof(WorkbookID), Name = "AK_Crop_CropName_WorkbookID", IsUnique = true)]
    public partial class Crop
    {
        public Crop()
        {
            CropSpecificInfos = new HashSet<CropSpecificInfo>();
            FieldInputByCrops = new HashSet<FieldInputByCrop>();
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            HarvestPostHarvestStandardTimes = new HashSet<HarvestPostHarvestStandardTime>();
            TransplantProductionInformations = new HashSet<TransplantProductionInformation>();
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
        }

        [Key]
        public int CropID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string CropName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("Crops")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(CropSpecificInfo.Crop))]
        public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; }
        [InverseProperty(nameof(FieldInputByCrop.Crop))]
        public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; }
        [InverseProperty(nameof(FieldLaborByCrop.Crop))]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty(nameof(HarvestPostHarvestStandardTime.Crop))]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
        [InverseProperty(nameof(TransplantProductionInformation.Crop))]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
        [InverseProperty(nameof(TransplantProductionLaborActivityByCrop.Crop))]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
    }
}
