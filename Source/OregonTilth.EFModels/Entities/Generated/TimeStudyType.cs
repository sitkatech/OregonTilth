using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("TimeStudyType")]
    [Index(nameof(TimeStudyTypeDisplayName), Name = "AK_TimeStudyType_TimeStudyTypeDisplayName", IsUnique = true)]
    [Index(nameof(TimeStudyTypeName), Name = "AK_TimeStudyType_TimeStudyTypeName", IsUnique = true)]
    public partial class TimeStudyType
    {
        public TimeStudyType()
        {
            TimeStudies = new HashSet<TimeStudy>();
        }

        [Key]
        public int TimeStudyTypeID { get; set; }
        [Required]
        [StringLength(100)]
        public string TimeStudyTypeName { get; set; }
        [Required]
        [StringLength(100)]
        public string TimeStudyTypeDisplayName { get; set; }

        [InverseProperty(nameof(TimeStudy.TimeStudyType))]
        public virtual ICollection<TimeStudy> TimeStudies { get; set; }
    }
}
