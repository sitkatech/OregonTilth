export class TransplantProductionInformationCreateDto {
    WorkbookID: number;
    CropID: number;
    PhaseID: number;
    TransplantProductionTrayTypeID: number;
    SeedsPerTray: number;
    UsageRate: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
