import { CropDto } from "../../generated/crop-dto";
import { CropUnitDto } from "../../generated/crop-unit-dto";


export class CropCropUnitDashboardReportDto {
    WorkbookID: number;
    Crop: CropDto;
    CropUnit: CropUnitDto;
    HarvestedYieldPerStandardUnitOfSpace: number;
    MarketableYieldPerStandardUnitOfSpace: number;
    PackagingCostPerCropUnit: number;
    PricePerCropUnit: number;

    VariableCostPerMarketableUnit: number;
    ContributionMarginPerMarketableUnit: number;
    ContributionMarginPerDirectLaborHour: number;
    ContributionMarginPerStandardUnitOfSpace: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}


