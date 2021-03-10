export class FieldLaborByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldLaborActivityID: number;
    LaborTypeID: number;
    Occurrances: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
