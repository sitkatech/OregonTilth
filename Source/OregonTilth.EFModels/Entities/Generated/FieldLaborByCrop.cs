using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldLaborByCrop")]
    [Index(nameof(WorkbookID), nameof(CropID), nameof(FieldStandardTimeID), Name = "AK_FieldLaborByCrop_WorkbookID_CropID_FieldStandardTimeID", IsUnique = true)]
    public partial class FieldLaborByCrop
    {
        [Key]
        public int FieldLaborByCropID { get; set; }
        public int WorkbookID { get; set; }
        public int CropID { get; set; }
        [Column(TypeName = "decimal(18, 4)")]
        public decimal? Occurrences { get; set; }
        public int FieldStandardTimeID { get; set; }

        [ForeignKey(nameof(CropID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual Crop Crop { get; set; }
        [ForeignKey(nameof(FieldStandardTimeID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual FieldStandardTime FieldStandardTime { get; set; }
        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("FieldLaborByCrops")]
        public virtual Workbook Workbook { get; set; }
    }
}
