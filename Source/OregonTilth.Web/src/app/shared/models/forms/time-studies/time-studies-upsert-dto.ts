import { TimeStudyDto } from "../../generated/time-study-dto";
import { FieldStandardTimeSummaryDto } from "../field-standard-times/field-standard-time-summary-dto";

export class TimeStudiesUpsertDto {
    TimeStudies: TimeStudyUpsertDto[];
    WorkbookID: number;
    FieldStandardTimeID: number;
    HarvestPostHarvestStandardTimeID: number;
    TransplantProductionStandardTimeID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export class TimeStudyUpsertDto {
    TimeStudyID: number;
    FieldStandardTimeID: number;
    HarvestPostHarvestStandardTimeID: number;
    TransplantProductionStandardTimeID: number;
    Notes: string;
    Units: number;
    Duration: number;
    WorkbookID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export class TimeStudySummaryDto {
    TimeStudyID: number;
    FieldStandardTimeID: number;
    HarvestPostHarvestStandardTimeID: number;
    TransplantProductionStandardTimeID: number;
    Notes: string;
    Units: number;
    Duration: number;
    WorkbookID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}