using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("Machinery")]
    public partial class Machinery
    {
        [Key]
        public int MachineryID { get; set; }
        public int WorkbookID { get; set; }
        [StringLength(200)]
        public string MachineryName { get; set; }
        [Column(TypeName = "money")]
        public decimal StandardMachineryCost { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("Machineries")]
        public virtual Workbook Workbook { get; set; }
    }
}
