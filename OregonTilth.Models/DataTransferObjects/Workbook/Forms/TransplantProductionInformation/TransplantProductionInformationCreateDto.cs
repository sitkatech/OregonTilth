using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionInformationCreateDto
    {
        [Required] public int WorkbookID { get; set; }
        [Required] public int CropID { get; set; }
        [Required] public int PhaseID { get; set; }
        [Required] public int TransplantProductionTrayTypeID { get; set; }
        [Required] public int SeedsPerTray { get; set; }
        [Required] public decimal UsageRate { get; set; }
        public decimal CostPerSeed { get; set; }
        public decimal CropSpecificInputCostsPerTray { get; set; }
    }
}