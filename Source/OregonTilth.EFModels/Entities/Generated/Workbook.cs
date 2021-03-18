using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("Workbook")]
    [Index(nameof(UserID), nameof(WorkbookName), Name = "AK_Workbook_UserID_WorkbookName", IsUnique = true)]
    public partial class Workbook
    {
        public Workbook()
        {
            CropUnits = new HashSet<CropUnit>();
            Crops = new HashSet<Crop>();
            FieldInputByCrops = new HashSet<FieldInputByCrop>();
            FieldInputCosts = new HashSet<FieldInputCost>();
            FieldLaborActivities = new HashSet<FieldLaborActivity>();
            FieldLaborByCrops = new HashSet<FieldLaborByCrop>();
            Machineries = new HashSet<Machinery>();
            TransplantProductionInputCosts = new HashSet<TransplantProductionInputCost>();
            TransplantProductionInputs = new HashSet<TransplantProductionInput>();
            TransplantProductionLaborActivities = new HashSet<TransplantProductionLaborActivity>();
            TransplantProductionLaborActivityByCrops = new HashSet<TransplantProductionLaborActivityByCrop>();
            TransplantProductionTrayTypes = new HashSet<TransplantProductionTrayType>();
        }

        [Key]
        public int WorkbookID { get; set; }
        public int UserID { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreateDate { get; set; }
        [Required]
        [StringLength(255)]
        public string WorkbookName { get; set; }
        [Column(TypeName = "money")]
        public decimal? AverageHourlyWage { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardUnitOfSpaceLength { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? StandardUnitOfSpaceWidth { get; set; }

        [ForeignKey(nameof(UserID))]
        [InverseProperty("Workbooks")]
        public virtual User User { get; set; }
        [InverseProperty(nameof(CropUnit.Workbook))]
        public virtual ICollection<CropUnit> CropUnits { get; set; }
        [InverseProperty(nameof(Crop.Workbook))]
        public virtual ICollection<Crop> Crops { get; set; }
        [InverseProperty(nameof(FieldInputByCrop.Workbook))]
        public virtual ICollection<FieldInputByCrop> FieldInputByCrops { get; set; }
        [InverseProperty(nameof(FieldInputCost.Workbook))]
        public virtual ICollection<FieldInputCost> FieldInputCosts { get; set; }
        [InverseProperty(nameof(FieldLaborActivity.Workbook))]
        public virtual ICollection<FieldLaborActivity> FieldLaborActivities { get; set; }
        [InverseProperty(nameof(FieldLaborByCrop.Workbook))]
        public virtual ICollection<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        [InverseProperty(nameof(Machinery.Workbook))]
        public virtual ICollection<Machinery> Machineries { get; set; }
        [InverseProperty(nameof(TransplantProductionInputCost.Workbook))]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
        [InverseProperty(nameof(TransplantProductionInput.Workbook))]
        public virtual ICollection<TransplantProductionInput> TransplantProductionInputs { get; set; }
        [InverseProperty(nameof(TransplantProductionLaborActivity.Workbook))]
        public virtual ICollection<TransplantProductionLaborActivity> TransplantProductionLaborActivities { get; set; }
        [InverseProperty(nameof(TransplantProductionLaborActivityByCrop.Workbook))]
        public virtual ICollection<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
        [InverseProperty(nameof(TransplantProductionTrayType.Workbook))]
        public virtual ICollection<TransplantProductionTrayType> TransplantProductionTrayTypes { get; set; }
    }
}
