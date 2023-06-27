using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionTrayType")]
    [Index("TransplantProductionTrayTypeName", "WorkbookID", Name = "AK_TransplantProductionTrayType_TransplantProductionTrayTypeName_WorkbookID", IsUnique = true)]
    public partial class TransplantProductionTrayType
    {
        public TransplantProductionTrayType()
        {
            TransplantProductionInformations = new HashSet<TransplantProductionInformation>();
            TransplantProductionInputCosts = new HashSet<TransplantProductionInputCost>();
            TransplantProductionStandardTimes = new HashSet<TransplantProductionStandardTime>();
        }

        [Key]
        public int TransplantProductionTrayTypeID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string TransplantProductionTrayTypeName { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("TransplantProductionTrayTypes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("TransplantProductionTrayType")]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
        [InverseProperty("TransplantProductionTrayType")]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
        [InverseProperty("TransplantProductionTrayType")]
        public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; }
    }
}
