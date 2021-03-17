export class FieldLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldLaborActivityID: number;
    LaborTypeID: number;
    Occurrences: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
