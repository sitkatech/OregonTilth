import { CropDto } from "../../generated/crop-dto";
import { CropUnitDto } from "../../generated/crop-unit-dto";
import { FieldLaborActivityCategoryDto } from "../../generated/field-labor-activity-category-dto";



export class LaborHoursDashboardReportDto {
    WorkbookID: number;
    Crop: CropDto;
    CropUnit: CropUnitDto;
    FieldLaborActivityCategory: FieldLaborActivityCategoryDto;
    LaborActivityHours: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
