import { TimeStudyDto } from "../../generated/time-study-dto";

export class TimeStudiesUpsertDto {
    TimeStudies: TimeStudyDto[];
    FieldLaborActivityID: number;
    LaborTypeID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
