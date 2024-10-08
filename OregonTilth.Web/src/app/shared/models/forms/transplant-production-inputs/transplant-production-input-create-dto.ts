export class TransplantProductionInputCreateDto {
    WorkbookID: number;
    TransplantProductionInputName: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
