export class TransplantProductionStandardTimeCreateDto {
    WorkbookID: number;
    TransplantProductionLaborActivityID: number;
    TransplantProductionTrayTypeID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
