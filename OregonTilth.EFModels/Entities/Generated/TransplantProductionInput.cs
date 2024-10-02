using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionInput")]
    [Index("TransplantProductionInputName", "WorkbookID", Name = "AK_TransplantProductionInput_TransplantProductionInputName_WorkbookID", IsUnique = true)]
    public partial class TransplantProductionInput
    {
        public TransplantProductionInput()
        {
            TransplantProductionInputCosts = new HashSet<TransplantProductionInputCost>();
        }

        [Key]
        public int TransplantProductionInputID { get; set; }
        public int WorkbookID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string TransplantProductionInputName { get; set; }

        [ForeignKey("WorkbookID")]
        [InverseProperty("TransplantProductionInputs")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty("TransplantProductionInput")]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
    }
}
