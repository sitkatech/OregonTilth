import { TimeStudyDto } from "../../generated/time-study-dto";
import { FieldStandardTimeSummaryDto } from "../field-standard-times/field-standard-time-summary-dto";

export class TimeStudiesUpsertDto {
    TimeStudies: TimeStudyDto[];
    FieldStandardTime: FieldStandardTimeSummaryDto;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
