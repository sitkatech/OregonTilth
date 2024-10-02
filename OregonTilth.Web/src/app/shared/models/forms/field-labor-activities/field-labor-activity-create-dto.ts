export class FieldLaborActivityCreateDto {
    WorkbookID: number;
    FieldLaborActivityName: string;
    FieldLaborActivityCategoryID: number;
    LaborTypeManual: boolean;
    LaborTypeMachinery: boolean;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
