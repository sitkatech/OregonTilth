using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("Phase")]
    [Index("PhaseDisplayName", Name = "AK_Phase_PhaseDisplayName", IsUnique = true)]
    [Index("PhaseName", Name = "AK_Phase_PhaseName", IsUnique = true)]
    public partial class Phase
    {
        public Phase()
        {
            TransplantProductionInformations = new HashSet<TransplantProductionInformation>();
        }

        [Key]
        public int PhaseID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string PhaseName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string PhaseDisplayName { get; set; }

        [InverseProperty("Phase")]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
    }
}
