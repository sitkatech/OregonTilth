export class FieldLaborActivityCreateDto {
    WorkbookID: number;
    FieldLaborActivityName: string;
    FieldLaborActivityCategoryID: number;
    LaborTypeCrew: boolean;
    LaborTypeOperator: boolean;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
