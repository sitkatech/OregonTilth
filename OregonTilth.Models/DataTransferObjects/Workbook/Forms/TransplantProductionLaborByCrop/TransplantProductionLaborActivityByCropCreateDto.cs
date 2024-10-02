using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionLaborActivityByCropCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int TransplantProductionInformationID { get; set; }
        [Required] public List<TransplantProductionLaborActivityDto> TransplantProductionLaborActivities { get; set; }
        [MaxLength(2000)] public string Notes { get; set; }
    }
}