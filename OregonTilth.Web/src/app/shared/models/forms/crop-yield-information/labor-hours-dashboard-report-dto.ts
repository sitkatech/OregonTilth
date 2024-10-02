import { CropDto } from "../../generated/crop-dto";
import { CropUnitDto } from "../../generated/crop-unit-dto";

export class LaborHoursDashboardReportDto {
    WorkbookID: number;
    Crop: CropDto;
    CropUnit: CropUnitDto;
    FieldLaborActivityCategory: string;
    LaborActivityHours: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
