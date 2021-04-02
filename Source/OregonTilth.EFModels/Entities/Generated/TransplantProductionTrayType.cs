﻿using System;
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
        public string TransplantProductionTrayTypeName { get; set; }

        [ForeignKey(nameof(WorkbookID))]
        [InverseProperty("TransplantProductionTrayTypes")]
        public virtual Workbook Workbook { get; set; }
        [InverseProperty(nameof(TransplantProductionInformation.TransplantProductionTrayType))]
        public virtual ICollection<TransplantProductionInformation> TransplantProductionInformations { get; set; }
        [InverseProperty(nameof(TransplantProductionInputCost.TransplantProductionTrayType))]
        public virtual ICollection<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
        [InverseProperty(nameof(TransplantProductionStandardTime.TransplantProductionTrayType))]
        public virtual ICollection<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; }
    }
}
