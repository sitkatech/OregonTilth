using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace OregonTilth.EFModels.Entities
{
    [Table("FieldDefinition")]
    public partial class FieldDefinition
    {
        [Key]
        public int FieldDefinitionID { get; set; }
        public int FieldDefinitionTypeID { get; set; }
        public string FieldDefinitionValue { get; set; }

        [ForeignKey(nameof(FieldDefinitionTypeID))]
        [InverseProperty("FieldDefinitions")]
        public virtual FieldDefinitionType FieldDefinitionType { get; set; }
    }
}
