using System.Linq;
using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class CropYieldInformationExtensionMethods
    {
        public static CropYieldInformationSummaryDto AsSummaryDto(this CropYieldInformation cropYieldInformation)
        {
            return new CropYieldInformationSummaryDto()
            {
                CropYieldInformationID = cropYieldInformation.CropYieldInformationID,
                Crop = cropYieldInformation.Crop.AsSummaryDto(),
                CropUnit = cropYieldInformation.CropUnit.AsSummaryDto(),
                HarvestedYieldPerStandardUnitOfSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace,
                MarketableYieldPerStandardUnitOfSpace = cropYieldInformation.MarketableYieldPerStandardUnitOfSpace,
                PackagingCostPerCropUnit = cropYieldInformation.PackagingCostPerCropUnit,
                PricePerCropUnit = cropYieldInformation.PricePerCropUnit,
                WorkbookID = cropYieldInformation.WorkbookID
            };
        }

        public static decimal VariableCostPerMarketableUnit(this CropYieldInformation cropYieldInformation)
        {

            // =[@[TOTAL DIRECT VARIABLE COSTS]]/[@[Total Crop Units Sold]]


            return cropYieldInformation.TotalDirectVariableCosts() / cropYieldInformation.MarketableYieldPerStandardUnitOfSpace;
        }

        public static decimal TotalDirectVariableCosts(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL LABOR COSTS]]+[@[TOTAL NON-LABOR INPUT COSTS]]+[@[TOTAL MACHINERY COSTS]]

            return cropYieldInformation.TotalLaborCosts() 
                   + cropYieldInformation.TotalNonLaborInputCosts() 
                   + cropYieldInformation.TotalMachineryCosts();

        }

        public static decimal TotalLaborCosts(this CropYieldInformation cropYieldInformation)
        {
            //=[@[TOTAL LABOR HOURS]]*INDEX(Table1[Average Hourly Wage],1)

            return cropYieldInformation.TotalLaborHours() * (decimal) cropYieldInformation.Workbook.AverageHourlyWage;
        }

        public static decimal TotalLaborHours(this CropYieldInformation cropYieldInformation)
        {
            //=([@[FIELD LABOR HRS PER STD BED ]]
            //+[@[HARVEST CREW LABOR HOURS PER STANDARD BED]]
            //+[@[HARVEST OPERATOR LABOR HOURS PER STANDARD BED]] -- this might be removed
            //+[@[TRANSPLANT PRODUCTION LABOR HOURS PER STANDARD BED]]
            //+[@[POST HARVEST LABOR HOURS PER STANDARD BED]])
            
            

            return (cropYieldInformation.FieldLaborHoursPerStandardBed() 
                   + cropYieldInformation.HarvestCrewLaborHoursPerStandardBed() 
                   + cropYieldInformation.HarvestOperatorLaborHoursPerStandardBed()
                       + TransplantProductionLaborHoursPerStandardBed()
                       +  PostHarvestLaborHoursPerStandardBed())
                

            
            
        }

        public static decimal FieldLaborHoursPerStandardBed(this CropYieldInformation cropYieldInformation)
        {
            //=SUMIF(Table19[Crop],[@Crop],Table19[LABOR ACTIVITY MINUTES PER STANDARD BED])/60
            
            // sum the "FieldLaborByCrops" for the crop
            return cropYieldInformation.Crop.FieldLaborByCrops.Sum(x => x.LaborActivityMinutesPerStandardBed()) / 60;
            
        }


    }
}