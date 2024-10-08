using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities;

[Table("Page")]
public partial class Page
{
    [Key]
    public int PageID { get; set; }

    [Required]
    [StringLength(100)]
    [Unicode(false)]
    public string PageName { get; set; }

    [Unicode(false)]
    public string PageContent { get; set; }

    public int SortOrder { get; set; }

    public int? ParentPageID { get; set; }

    [InverseProperty("ParentPage")]
    public virtual ICollection<Page> InverseParentPage { get; set; } = new List<Page>();

    [ForeignKey("ParentPageID")]
    [InverseProperty("InverseParentPage")]
    public virtual Page ParentPage { get; set; }
}
