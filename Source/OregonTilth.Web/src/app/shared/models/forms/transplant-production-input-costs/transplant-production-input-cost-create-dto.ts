export class TransplantProductionInputCostCreateDto {
    WorkbookID: number;
    TransplantProductionInputID: number;
    TransplantProductionTrayTypeID: number;
    CostPerTray: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
