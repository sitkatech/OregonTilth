using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("Workbook")]
    [Index("UserID", "WorkbookName", Name = "AK_Workbook_UserID_WorkbookName", IsUnique = true)]
    public partial class Workbook
    {
        public Workbook()
        {
            CropSpecificInfos = new HashSet<CropSpecificInfo>();
            CropUnits = new HashSet<CropUnit>();
            CropYieldInformations = new HashSet<CropYieldInformation>();
            Crops = new HashSet<Crop>();
            FieldInputByCrops = new HashSet<FieldInputByCrop>();
            FieldInputCosts = new HashSet<FieldInputCost>();
            FieldLaborActivities = new HashSet<FieldLaborActivity>();
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            FieldStandardTimes = new HashSet<FieldStandardTime>();
            HarvestPostHarvestStandardTimes = new HashSet<HarvestPostHarvestStandardTime>();
            Machineries = new HashSet<Machinery>();
            TimeStudies = new HashSet<TimeStudy>();
            TransplantProductionInformations = new HashSet<TransplantProductionInformation>();
            TransplantProductionInputCosts = new HashSet<TransplantProductionInputCost>();
            TransplantProductionInputs = new HashSet<TransplantProductionInput>();
            TransplantProductionLaborActivities = new HashSet<TransplantProductionLaborActivity>();
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
            TransplantProductionStandardTimes = new HashSet<TransplantProductionStandardTime>();
            TransplantProductionTrayTypes = new HashSet<TransplantProductionTrayType>();
        }

        [Key]
        public int WorkbookID { get; set; }
        public int UserID { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreateDate { get; set; }
        [Required]
        [StringLength(255)]
        [Unicode(false)]
        public string WorkbookName { get; set; }
        [Column(TypeName = "money")]
        public decimal AverageHourlyWage { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal StandardUnitOfSpaceLength { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal StandardUnitOfSpaceWidth { get; set; }

        [ForeignKey("UserID")]
        [InverseProperty("Workbooks")]
        public virtual User User { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<CropSpecificInfo> CropSpecificInfos { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<CropUnit> CropUnits { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<CropYieldInformation> CropYieldInformations { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<Crop> Crops { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<FieldInputCost> FieldInputCosts { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<FieldLaborActivity> FieldLaborActivities { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<FieldStandardTime> FieldStandardTimes { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<Machinery> Machineries { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionInput> TransplantProductionInputs { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionLaborActivity> TransplantProductionLaborActivities { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; }
        [InverseProperty("Workbook")]
        public virtual ICollection<TransplantProductionTrayType> TransplantProductionTrayTypes { get; set; }
    }
}
