namespace OregonTilth.Models.DataTransferObjects
{
    public class WorkbookSummaryDto
    {
        public int WorkbookID { get; set; }
        public string WorkbookName { get; set; }
        public decimal? AverageHourlyWage { get; set; }
        public decimal? StandardUnitOfSpaceLength { get; set; }
        public decimal? StandardUnitOfSpaceWidth { get; set; }
    }
}