using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("Page")]
    public partial class Page
    {
        public Page()
        {
            InverseParentPage = new HashSet<Page>();
        }

        [Key]
        public int PageID { get; set; }
        public int CustomRichTextTypeID { get; set; }
        public int SortOrder { get; set; }
        public int? ParentPageID { get; set; }

        [ForeignKey(nameof(CustomRichTextTypeID))]
        [InverseProperty("Pages")]
        public virtual CustomRichTextType CustomRichTextType { get; set; }
        [ForeignKey(nameof(ParentPageID))]
        [InverseProperty(nameof(Page.InverseParentPage))]
        public virtual Page ParentPage { get; set; }
        [InverseProperty(nameof(Page.ParentPage))]
        public virtual ICollection<Page> InverseParentPage { get; set; }
    }
}
