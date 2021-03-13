export class FieldInputByCostCreateDto {
    WorkbookID: number;
    FieldInputByCostName: string;
    FieldUnitTypeID: number;
    CostPerFieldUnit: number;
    Notes: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
