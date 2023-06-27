using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("Crop")]
    [Index("CropName", "WorkbookID", Name = "AK_Crop_CropName_WorkbookID", IsUnique = true)]
    public partial class Crop
    {
        public Crop()
        {
            CropSpecificInfos = new HashSet<CropSpecificInfo>();
            CropYieldInformations = new HashSet<CropYieldInformation>();
            FieldInputByCrops = new HashSet<FieldInputByCrop>();
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            HarvestPostHarvestStandardTimes = new HashSet<HarvestPostHarvestStandardTime>();
            TransplantProductionInformations = new HashSet<TransplantProductionInformation>();
        }

        [Key]
        public int CropID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string CropName { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("Crops")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
        [InverseProperty("Crop")]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
    }
}
