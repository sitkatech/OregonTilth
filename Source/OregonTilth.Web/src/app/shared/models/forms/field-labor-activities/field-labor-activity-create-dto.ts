export class FieldLaborActivityCreateDto {
    WorkbookID: number;
    FieldLaborActivityName: string;
    FieldLaborActivityCategoryID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
