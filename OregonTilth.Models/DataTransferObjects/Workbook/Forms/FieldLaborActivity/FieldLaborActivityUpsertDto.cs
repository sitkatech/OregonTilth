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
        public bool LaborTypeManual { get; set; }
        public bool LaborTypeMachinery { get; set; }
    }
}