using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    [Table("CustomRichTextType")]
    [Index("CustomRichTextTypeDisplayName", Name = "AK_CustomRichTextType_CustomRichTextTypeDisplayName", IsUnique = true)]
    [Index("CustomRichTextTypeName", Name = "AK_CustomRichTextType_CustomRichTextTypeName", IsUnique = true)]
    public partial class CustomRichTextType
    {
        public CustomRichTextType()
        {
            CustomRichTexts = new HashSet<CustomRichText>();
        }

        [Key]
        public int CustomRichTextTypeID { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string CustomRichTextTypeName { get; set; }
        [Required]
        [StringLength(100)]
        [Unicode(false)]
        public string CustomRichTextTypeDisplayName { get; set; }

        [InverseProperty("CustomRichTextType")]
        public virtual ICollection<CustomRichText> CustomRichTexts { get; set; }
    }
}
