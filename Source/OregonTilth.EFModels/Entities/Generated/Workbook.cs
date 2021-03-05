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
        [Key]
        public int WorkbookID { get; set; }
        public int UserID { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreateDate { get; set; }
        [Required]
        [StringLength(255)]
        public string WorkbookName { get; set; }

        [ForeignKey(nameof(UserID))]
        [InverseProperty("Workbooks")]
        public virtual User User { get; set; }
    }
}
