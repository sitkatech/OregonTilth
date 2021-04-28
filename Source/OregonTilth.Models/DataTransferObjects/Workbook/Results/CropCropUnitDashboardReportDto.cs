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
        public string FieldLaborActivityCategory { get; set; }
        public decimal LaborActivityHours { get; set; }
    }

    public class VariableCostsDashboardReportDto
    {
        public CropSummaryDto Crop { get; set; }
        public CropUnitSummaryDto CropUnit { get; set; }
        public decimal TotalLaborCosts { get; set; }
        public decimal TotalFieldInputCosts { get; set; }
        public decimal TotalMachineryCosts { get; set; }
        public decimal TotalPackagingCosts { get; set; }
        public decimal TotalSeedOrTpCosts { get; set; }
    }
}