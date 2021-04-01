import { TransplantProductionLaborActivityDto } from "../../generated/transplant-production-labor-activity-dto";

export class TransplantProductionLaborByCropCreateDto {
    WorkbookID: number;
    TransplantProductionInformationID: number;
    TransplantProductionLaborActivities: TransplantProductionLaborActivityDto[];
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
