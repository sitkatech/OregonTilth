export class FieldInputCostCreateDto {
    WorkbookID: number;
    FieldInputCostName: string;
    FieldUnitTypeID: number;
    CostPerFieldUnit: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
