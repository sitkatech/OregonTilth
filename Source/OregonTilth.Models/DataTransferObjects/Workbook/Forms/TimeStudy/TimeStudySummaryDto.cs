namespace OregonTilth.Models.DataTransferObjects
{
    public class TimeStudySummaryDto
    {
        public int TimeStudyID { get; set; }
        public int WorkbookID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int? TransplantProductionStandardTimeID { get; set; }
        public decimal Duration { get; set; }
        public decimal Units { get; set; }
        public string Notes { get; set; }
    }
}