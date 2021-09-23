import { FieldStandardTimeDto } from "../../generated/field-standard-time-dto";
import { FieldStandardTimeSummaryDto } from "../field-standard-times/field-standard-time-summary-dto";

export class FieldLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldStandardTimes: FieldStandardTimeSummaryDto[];
    FieldStandardTimeID: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
