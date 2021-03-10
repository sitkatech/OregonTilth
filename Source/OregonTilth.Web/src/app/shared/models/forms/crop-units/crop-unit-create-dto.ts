export class CropUnitCreateDto {
    WorkbookID: number;
    CropUnitName: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
