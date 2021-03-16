import { TransplantProductionLaborActivityDto } from "../../generated/transplant-production-labor-activity-dto";

export class TransplantProductionLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    PhaseID: number;
    TransplantProductionLaborActivities: TransplantProductionLaborActivityDto[];
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
