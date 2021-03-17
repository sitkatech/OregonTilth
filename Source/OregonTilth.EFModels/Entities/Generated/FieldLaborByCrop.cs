using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborByCrop")]
    [Index(nameof(WorkbookID), nameof(CropID), nameof(FieldLaborActivityID), nameof(LaborTypeID), Name = "AK_FieldLaborByCrop_WorkbookID_CropID_FieldLaborActivityID_LaborTypeID", IsUnique = true)]
    public partial class FieldLaborByCrop
    {
        [Key]
        public int FieldLaborByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        public int FieldLaborActivityID { get; set; }
        public int LaborTypeID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal Occurrences { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(FieldLaborActivityID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual FieldLaborActivity FieldLaborActivity { get; set; }
        [ForeignKey(nameof(LaborTypeID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual LaborType LaborType { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
