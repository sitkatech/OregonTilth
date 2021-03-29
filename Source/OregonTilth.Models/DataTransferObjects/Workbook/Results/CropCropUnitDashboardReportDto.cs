namespace OregonTilth.Models.DataTransferObjects
{
    public class CropCropUnitDashboardReportDto : CropYieldInformationSummaryDto
    {
        public decimal VariableCostPerMarketableUnit { get; set; }
        public decimal ContributionMarginPerMarketableUnit { get; set; }
        public decimal ContributionMarginPerDirectLaborHour { get; set; }
        public decimal ContributionMarginPerStandardUnitOfSpace { get; set; }
    }

    public class LaborHoursDashboardReportDto
    {
        public CropSummaryDto Crop { get; set; }
        public CropUnitSummaryDto CropUnit { get; set; }
        public FieldLaborActivityCategoryDto FieldLaborActivityCategory { get; set; }
        public decimal LaborActivityHours { get; set; }
    }
}