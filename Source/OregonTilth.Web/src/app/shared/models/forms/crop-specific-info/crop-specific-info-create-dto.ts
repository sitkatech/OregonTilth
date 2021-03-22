export class CropSpecificInfoCreateDto {
    WorkbookID: number;
    CropID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
