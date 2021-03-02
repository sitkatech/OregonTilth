using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("CustomRichText")]
    public partial class CustomRichText
    {
        [Key]
        public int CustomRichTextID { get; set; }
        public int CustomRichTextTypeID { get; set; }
        public string CustomRichTextContent { get; set; }

        [ForeignKey(nameof(CustomRichTextTypeID))]
        [InverseProperty("CustomRichTexts")]
        public virtual CustomRichTextType CustomRichTextType { get; set; }
    }
}
