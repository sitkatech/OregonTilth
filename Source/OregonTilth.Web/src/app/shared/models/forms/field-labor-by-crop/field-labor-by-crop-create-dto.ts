import { FieldStandardTimeDto } from "../../generated/field-standard-time-dto";

export class FieldLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldStandardTimes: FieldStandardTimeDto[];
    FieldStandardTimeID: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
