import { CropDto } from "../../generated/crop-dto";

export class VariableCostsDashboardReportDto {
    Crop: CropDto;
    TotalFieldInputCosts: number;
    TotalLaborCosts: number;
    TotalMachineryCosts: number;
    TotalPackagingCosts: number;
    TotalSeedOrTpCosts: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
