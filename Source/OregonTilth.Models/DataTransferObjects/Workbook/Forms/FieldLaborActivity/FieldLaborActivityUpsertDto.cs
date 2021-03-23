using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class FieldLaborActivityUpsertDto
    {
        [Required]
        public string FieldLaborActivityName { get; set; }
        [Required]
        public int FieldLaborActivityCategoryID { get; set; }
        [Required] public int WorkbookID { get; set; }
        public bool LaborTypeCrew { get; set; }
        public bool LaborTypeOperator { get; set; }
    }
}