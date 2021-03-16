using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionTrayType")]
    [Index(nameof(TransplantProductionTrayTypeName), nameof(WorkbookID), Name = "AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID", IsUnique = true)]
    public partial class TransplantProductionTrayType
    {
        [Key]
        public int TransplantProductionTrayTypeID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        public string TransplantProductionTrayTypeName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionTrayTypes")]
        public virtual Workbook Workbook { get; set; }
    }
}
