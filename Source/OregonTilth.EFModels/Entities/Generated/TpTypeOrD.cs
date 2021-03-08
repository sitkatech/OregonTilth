using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Index(nameof(TpTypeOrDsDisplayName), Name = "AK_TpTypeOrDs_TpTypeOrDsDisplayName", IsUnique = true)]
    [Index(nameof(TpTypeOrDsName), Name = "AK_TpTypeOrDs_TpTypeOrDsName", IsUnique = true)]
    public partial class TpTypeOrD
    {
        [Key]
        public int TpTypeOrDsID { get; set; }
        [Required]
        [StringLength(100)]
        public string TpTypeOrDsName { get; set; }
        [Required]
        [StringLength(100)]
        public string TpTypeOrDsDisplayName { get; set; }
    }
}
