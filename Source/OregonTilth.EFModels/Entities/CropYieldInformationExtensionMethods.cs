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


        public static CropYieldInformationDashboardReportDto AsDashbardReportDto(
            this CropYieldInformation cropYieldInformation)
        {
            return new CropYieldInformationDashboardReportDto()
            {
                CropYieldInformationID = cropYieldInformation.CropYieldInformationID,
                Crop = cropYieldInformation.Crop.AsSummaryDto(),
                CropUnit = cropYieldInformation.CropUnit.AsSummaryDto(),
                HarvestedYieldPerStandardUnitOfSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace,
                MarketableYieldPerStandardUnitOfSpace = cropYieldInformation.MarketableYieldPerStandardUnitOfSpace,
                PackagingCostPerCropUnit = cropYieldInformation.PackagingCostPerCropUnit,
                PricePerCropUnit = cropYieldInformation.PricePerCropUnit,
                WorkbookID = cropYieldInformation.WorkbookID,
                VariableCostPerMarketableUnit = cropYieldInformation.VariableCostPerMarketableUnit(),
                ContributionMarginPerMarketableUnit = cropYieldInformation.ContributionMarginPerMarketableUnit(),
                ContributionMarginPerDirectLaborHour = cropYieldInformation.ContributionMarginPerDirectLaborHour(),
                ContributionMarginPerStandardUnitOfSpace = cropYieldInformation.ContributionMarginPerStandardUnitOfSpace()
            };
        }

        public static decimal VariableCostPerMarketableUnit(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL DIRECT VARIABLE COSTS]]/[@[Total Crop Units Sold]]
            return cropYieldInformation.TotalDirectVariableCosts() / cropYieldInformation.MarketableYieldPerStandardUnitOfSpace;
        }

        public static decimal ContributionMarginPerMarketableUnit(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL DIRECT VARIABLE COSTS]]/[@[Marketable Yield Per Standard Unit of Space]]

            return cropYieldInformation.TotalDirectVariableCosts() /
                   cropYieldInformation.MarketableYieldPerStandardUnitOfSpace;
        }

        public static decimal ContributionMarginPerDirectLaborHour(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL DIRECT VARIABLE COSTS]]/[@[TOTAL LABOR HOURS]]

            return cropYieldInformation.TotalDirectVariableCosts() / cropYieldInformation.TotalLaborHours();
        }

        public static decimal ContributionMarginPerStandardUnitOfSpace(this CropYieldInformation cropYieldInformation)
        {
            //=[@[CONTRIBUTION MARGIN PER CROP UNIT]]*[@[Marketable Yield Per Standard Unit of Space]]

            return cropYieldInformation.ContributionMarginPerMarketableUnit() *
                   cropYieldInformation.MarketableYieldPerStandardUnitOfSpace;
        }

        public static decimal TotalDirectVariableCosts(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL LABOR COSTS]]+[@[TOTAL NON-LABOR INPUT COSTS]]+[@[TOTAL MACHINERY COSTS]]

            return cropYieldInformation.TotalLaborCosts() 
                   + cropYieldInformation.TotalNonLaborInputCosts() 
                   + cropYieldInformation.TotalMachineryCosts();
            }

        public static decimal TotalMachineryCosts(this CropYieldInformation cropYieldInformation)
        {
            //=IF([@[Post Harvest Machinery Crop Units Per Hour]]=0,
            //  (SUMIF(Table19[Crop],[@Crop], Table19[MACHINERY COSTS PER STANDARD BED]) * [@[STANDARD Units of Space]] + ([@[Harvest Machinery Operating Cost per Hour]]*[@[Operator Harvest Hours per Standard Unit of Space  ]]) * ([@[STANDARD Units of Space]])),
            var machineryCostsPerStandardBed = cropYieldInformation.Crop.FieldLaborByCrops.Sum(x => x.MachineryCostsPerStandardBed());

            return machineryCostsPerStandardBed;

            // else
            //  (SUMIF(Table19[Crop],[@Crop], Table19[MACHINERY COSTS PER STANDARD BED]) + ([@[Harvest Machinery Operating Cost per Hour]]*[@[Operator Harvest Hours per Standard Unit of Space]])+(([@[Yield per Standard Unit of Space]]/[@[Post Harvest Machinery Crop Units Per Hour]])*[@[Post Harvest Machinery Operating Cost per Hour]])))
            //table19 = FieldLaborActivityByCrop


        }

        public static decimal TotalNonLaborInputCosts(this CropYieldInformation cropYieldInformation)
        {
            // =[@[TOTAL FIELD INPUT COSTS]]+[@[TOTAL SEED OR TP COST]]+[@[TOTAL PACKAGING COSTS]]

            return cropYieldInformation.TotalFieldInputCosts()
                   + cropYieldInformation.TotalSeedOrTPCost()
                   + cropYieldInformation.TotalPackagingCosts();

        }


        public static decimal TotalPackagingCosts(this CropYieldInformation cropYieldInformation)
        {
            return cropYieldInformation.PackagingCostPerCropUnit *
                   cropYieldInformation.MarketableYieldPerStandardUnitOfSpace;
        }


        public static decimal TotalSeedOrTPCost(this CropYieldInformation cropYieldInformation)
        {
            //=IF([@[HELPER COLUMN FOR TOTAL SEED OR TP COST ]]="Transplant Farm Produced",
            //  INDEX(Table22[TOTAL INPUT COST PER TRANSPLANT],MATCH([@Crop],Table22[Crop],0))
            //  * INDEX(Table9[UNITS USED],MATCH(1,([@Crop]=Table9[Crop])*("Transplants"=Table9[Field Unit])*{1},0)),
            //IF([@[HELPER COLUMN FOR TOTAL SEED OR TP COST]]= "Transplant Outsourced",
            //  INDEX(Table22[TP Cost(Transplant Outsourced)], MATCH([@Crop], Table22[Crop], 0))
            //  * INDEX(Table9[UNITS USED], MATCH(1, ([@Crop] = Table9[Crop]) * ("Transplants" = Table9[Field Unit]) *{ 1},0)),
            //IF([@[HELPER COLUMN FOR TOTAL SEED OR TP COST]]= "Direct Seeded",
            //  INDEX(Table22[Seed Cost per Standard Row], MATCH([@Crop], Table22[Crop], 0)),
            //NA())))

            var tpOrDsType = cropYieldInformation.GetTransplantProductionTpOrDsType();
            var cropSpecificInfo = cropYieldInformation.Crop.CropSpecificInfos.Single();

            if (tpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantFarmProduced)
            {
                return cropSpecificInfo.TotalInputCostPerTransplant() *
                       cropSpecificInfo.UnitsUsed(FieldUnitTypeEnum.Transplants);
            }

            if (tpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.TransplantOutsourced)
            {
                return cropSpecificInfo.TransplantProductionCostOutsourced *
                       cropSpecificInfo.UnitsUsed(FieldUnitTypeEnum.Transplants) 
                       ?? 0;
            }

            if (tpOrDsType.TpOrDsTypeID == (int)TpOrDsTypeEnum.DirectSeeded)
            {
                return cropSpecificInfo.SeedCostPerStandardUnitOfSpace ?? 0;
            }

            return 0;

        }

        public static decimal TotalFieldInputCosts(this CropYieldInformation cropYieldInformation)
        {
            // =SUMIF(Table20[Crop],[@Crop], Table20[FIELD INPUT COSTS PER STANDARD BED])
            //table20 = FieldInputByCrop

            return cropYieldInformation.Crop.FieldInputByCrops.Sum(x => x.FieldInputCostsPerStandardBed());
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
                    // + cropYieldInformation.HarvestOperatorLaborHoursPerStandardBed()
                    + cropYieldInformation.TransplantProductionLaborHoursPerStandardBed()
                    + cropYieldInformation.PostHarvestLaborHoursPerStandardBed());




        }

        public static decimal FieldLaborHoursPerStandardBed(this CropYieldInformation cropYieldInformation)
        {
            //=SUMIF(Table19[Crop],[@Crop],Table19[LABOR ACTIVITY MINUTES PER STANDARD BED])/60
            
            // sum the "FieldLaborByCrops" for the crop
            return cropYieldInformation.Crop.FieldLaborByCrops.Sum(x => x.LaborActivityMinutesPerStandardBed()) / 60;
            
        }

        public static decimal HarvestCrewLaborHoursPerStandardBed(this CropYieldInformation cropYieldInformation)
        {
            // =[@[Yield per Standard Unit of Space]]/[@[Harvest Crop Units per Hour (Manual)]]
            /*
             *
             * NEEDS A FORMULA:
             * Divides the Harvest Yield per Standard of Space for the Crop/Unit
             * by the (AVERAGE TIME (Crop Units per Minute) from Table 29 divided by 60) where there’s a match at Crop and Unit and H or PH = “Harvest”
             */

            var harvestYieldPerStandardSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace;

            var harvestStandardTime = cropYieldInformation.Crop.HarvestPostHarvestStandardTimes.SingleOrDefault(x =>
                x.CropUnitID == cropYieldInformation.CropUnitID && x.WorkbookID == cropYieldInformation.WorkbookID && x.HarvestTypeID == (int) HarvestTypeEnum.Harvest);

            if (harvestStandardTime?.StandardTimePerUnit != null)
            {
                return harvestYieldPerStandardSpace / ((decimal)harvestStandardTime.StandardTimePerUnit / 60);
            }

            return 0;

        }

        public static decimal PostHarvestLaborHoursPerStandardBed(this CropYieldInformation cropYieldInformation)
        {
            var harvestYieldPerStandardSpace = cropYieldInformation.HarvestedYieldPerStandardUnitOfSpace;

            var harvestStandardTime = cropYieldInformation.Crop.HarvestPostHarvestStandardTimes.SingleOrDefault(x =>
                x.CropUnitID == cropYieldInformation.CropUnitID && x.WorkbookID == cropYieldInformation.WorkbookID && x.HarvestTypeID == (int)HarvestTypeEnum.PostHarvest);

            if (harvestStandardTime?.StandardTimePerUnit != null)
            {
                return harvestYieldPerStandardSpace / ((decimal)harvestStandardTime.StandardTimePerUnit / 60);
            }

            return 0;
        }

        public static decimal TransplantProductionLaborHoursPerStandardBed(this CropYieldInformation cropYieldInformation)
        {
            /*
              =IF([@[HELPER COLUMN FOR TOTAL SEED OR TP COST ]]="Direct Seeded",0,
              IF([@[HELPER COLUMN FOR TOTAL SEED OR TP COST ]]="Transplant Outsourced",0,
              INDEX(Table9[UNITS USED],MATCH(1,(Table9[Field Unit]="Transplants")*([@Crop]=Table9[Crop])*{1},0))*INDEX(Table22[TOTAL LABOR HOURS PER TRANSPLANT],MATCH([@Crop],Table22[Crop],0))))
             */

            var tpOrDsType = cropYieldInformation.GetTransplantProductionTpOrDsType();

            if (tpOrDsType == null 
                || tpOrDsType.TpOrDsTypeID == (int) TpOrDsTypeEnum.DirectSeeded 
                || tpOrDsType.TpOrDsTypeID == (int) TpOrDsTypeEnum.TransplantOutsourced)
            {
                return 0;
            }

            var cropInfo = cropYieldInformation.Crop.CropSpecificInfos.SingleOrDefault();
            var totalLaborHoursPerTransplant = cropInfo.TotalLaborHoursPerTransplant();
            // else get Units Used * TotalLaborHoursPerTransplant for the crop
            var unitsUsed = cropInfo.UnitsUsed(FieldUnitTypeEnum.Transplants);


            return totalLaborHoursPerTransplant * unitsUsed;
        }

        public static TpOrDsType GetTransplantProductionTpOrDsType(this CropYieldInformation cropYieldInformation)
        {
            //=INDEX(Table22[TP Type or DS],MATCH([@Crop],Table22[Crop],0))
            // table 22 = Crop Specific Info

            var cropInfo = cropYieldInformation.Crop.CropSpecificInfos.SingleOrDefault();
            return cropInfo?.TpOrDsType;

        }
    }
}