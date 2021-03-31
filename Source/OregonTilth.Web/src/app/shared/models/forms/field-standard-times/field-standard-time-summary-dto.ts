import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";
import { FieldUnitTypeDto } from "../../generated/field-unit-type-dto";
import { LaborTypeDto } from "../../generated/labor-type-dto";
import { MachineryDto } from "../../generated/machinery-dto";
import { TimeStudyDto } from "../../generated/time-study-dto";
import { TimeStudySummaryDto } from "../time-studies/time-studies-upsert-dto";

export class FieldStandardTimeSummaryDto {
    WorkbookID: number;
    FieldStandardTimeID: number;
    FieldLaborActivity: FieldLaborActivityDto;
    LaborType: LaborTypeDto;
    Machinery: MachineryDto;
    FieldUnitType: FieldUnitTypeDto;
    AverageMinutesPerFieldUnit: number;
    StandardTimePerUnit: number;
    TimeStudies: TimeStudySummaryDto[];
    FieldLaborActivityAndLaborTypeNameForDropdown: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

