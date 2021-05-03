import { CropDto } from "../../generated/crop-dto";
import { CropUnitDto } from "../../generated/crop-unit-dto";

export class VariableCostsDashboardReportDto {
    Crop: CropDto;
    CropUnit: CropUnitDto;
    TotalFieldInputCosts: number;
    TotalLaborCosts: number;
    TotalMachineryCosts: number;
    TotalPackagingCosts: number;
    TotalSeedOrTpCosts: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export class ViariableCostForCropPivoted {
    VariableCost: string;
    DollarAmount: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}