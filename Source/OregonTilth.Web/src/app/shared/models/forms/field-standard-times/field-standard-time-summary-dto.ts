import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";
import { TimeStudyDto } from "../../generated/time-study-dto";

export class FieldStandardTimeSummaryDto {
    WorkbookID: number;
    FieldStandardTimeID: number;
    FieldLaborActivity: FieldLaborActivityDto;
    TimeStudies: TimeStudyDto
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
