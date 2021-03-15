export class TransplantProductionLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    TransplantProductionLaborActivityID: number;
    PhaseID: number;
    Occurrances: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
