//import { TransplantProductionLaborActivityDto } from "../../generated/transplant-production-labor-activity-dto";

export class FieldInputByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    //TransplantProductionLaborActivities: TransplantProductionLaborActivityDto[];
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
