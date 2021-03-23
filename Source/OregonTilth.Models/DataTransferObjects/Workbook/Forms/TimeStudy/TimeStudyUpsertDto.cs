namespace OregonTilth.Models.DataTransferObjects
{
    public class TimeStudyUpsertDto
    {
        public int TimeStudyID { get; set; }
        public int? FieldStandardTimeID { get; set; }
        public int? HarvestPostHarvestStandardTimeID { get; set; }
        public int? TransplantProductionStandardTimeID { get; set; }
        public string Notes { get; set; }
        public int Units { get; set; }
        public int Duration { get; set; }
        public int WorkbookID { get; set; }
    }
}