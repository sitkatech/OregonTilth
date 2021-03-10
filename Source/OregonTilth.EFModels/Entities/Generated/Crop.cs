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
        [Key]
        public int CropID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string CropName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("Crops")]
        public virtual Workbook Workbook { get; set; }
    }
}
