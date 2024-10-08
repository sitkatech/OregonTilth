using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Keyless]
    public partial class vFieldLaborActivityForTimeStudy
    {
        public int WorkbookID { get; set; }
        public int FieldLaborActivityID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string FieldLaborActivityName { get; set; }
        public int? LaborTypeID { get; set; }
        [StringLength(9)]
        [Unicode(false)]
        public string LaborTypeDisplayName { get; set; }
        public int? FieldStandardTimeID { get; set; }
    }
}
