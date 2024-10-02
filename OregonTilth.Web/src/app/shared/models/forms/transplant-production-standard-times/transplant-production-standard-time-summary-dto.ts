import { TransplantProductionLaborActivityDto } from "../../generated/transplant-production-labor-activity-dto";
import { TransplantProductionTrayTypeDto } from "../../generated/transplant-production-tray-type-dto";
import { TimeStudySummaryDto } from "../time-studies/time-studies-upsert-dto";

export class TransplantProductionStandardTimeSummaryDto {
    TransplantProductionStandardTimeID: number;
    WorkbookID: number;
    TransplantProductionLaborActivityID: number;
    TransplantProductionLaborActivity: TransplantProductionLaborActivityDto;
    TransplantProductionTrayTypeID: number;
    TransplantProductionTrayType: TransplantProductionTrayTypeDto;
    StandardTimePerUnit: number;
    TimeStudies: TimeStudySummaryDto[]
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
