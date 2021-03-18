import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";

export class FieldLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldLaborActivities: FieldLaborActivityDto[];
    FieldLaborActivityID: number;
    LaborTypeID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
