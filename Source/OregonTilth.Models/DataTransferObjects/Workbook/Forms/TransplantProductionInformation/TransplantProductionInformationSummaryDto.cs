using System.ComponentModel.DataAnnotations;

namespace OregonTilth.Models.DataTransferObjects
{
    public class TransplantProductionInformationSummaryDto
    {
        public int TransplantProductionInformationID { get; set; }
        public WorkbookSummaryDto Workbook { get; set; }
        public CropSummaryDto Crop { get; set; }
        public PhaseDto Phase { get; set; }
        public TransplantProductionTrayTypeSummaryDto TransplantProductionTrayType { get; set; }
        public int SeedsPerTray { get; set; }
        public decimal UsageRate { get; set; }
    }
}