﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("CustomRichTextType")]
    [Index(nameof(CustomRichTextTypeDisplayName), Name = "AK_CustomRichTextType_CustomRichTextTypeDisplayName", IsUnique = true)]
    [Index(nameof(CustomRichTextTypeName), Name = "AK_CustomRichTextType_CustomRichTextTypeName", IsUnique = true)]
    public partial class CustomRichTextType
    {
        public CustomRichTextType()
        {
            CustomRichTexts = new HashSet<CustomRichText>();
            Pages = new HashSet<Page>();
        }

        [Key]
        public int CustomRichTextTypeID { get; set; }
        [Required]
        [StringLength(100)]
        public string CustomRichTextTypeName { get; set; }
        [Required]
        [StringLength(100)]
        public string CustomRichTextTypeDisplayName { get; set; }

        [InverseProperty(nameof(CustomRichText.CustomRichTextType))]
        public virtual ICollection<CustomRichText> CustomRichTexts { get; set; }
        [InverseProperty(nameof(Page.CustomRichTextType))]
        public virtual ICollection<Page> Pages { get; set; }
    }
}
