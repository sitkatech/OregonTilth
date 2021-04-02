﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("Phase")]
    [Index(nameof(PhaseDisplayName), Name = "AK_Phase_PhaseDisplayName", IsUnique = true)]
    [Index(nameof(PhaseName), Name = "AK_Phase_PhaseName", IsUnique = true)]
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
        public string PhaseName { get; set; }
        [Required]
        [StringLength(100)]
        public string PhaseDisplayName { get; set; }

        [InverseProperty(nameof(TransplantProductionInformation.Phase))]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
    }
}
