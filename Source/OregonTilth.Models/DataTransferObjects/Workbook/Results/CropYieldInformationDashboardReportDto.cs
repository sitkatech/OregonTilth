namespace OregonTilth.Models.DataTransferObjects
{
    public class CropYieldInformationDashboardReportDto : CropYieldInformationSummaryDto
    {
        public decimal VariableCostPerMarketableUnit { get; set; }
        public decimal ContributionMarginPerMarketableUnit { get; set; }
        public decimal ContributionMarginPerDirectLaborHour { get; set; }
        public decimal ContributionMarginPerStandardUnitOfSpace { get; set; }
    }
}