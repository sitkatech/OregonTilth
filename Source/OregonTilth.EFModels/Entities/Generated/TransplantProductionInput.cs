using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TransplantProductionInput")]
    [Index(nameof(TransplantProductionInputName), nameof(WorkbookID), Name = "AK_TransplantProductionInput_TransplantProductionInputName_WorkbookID", IsUnique = true)]
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
        public string TransplantProductionInputName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionInputs")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TransplantProductionInputCost.TransplantProductionInput))]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
    }
}
