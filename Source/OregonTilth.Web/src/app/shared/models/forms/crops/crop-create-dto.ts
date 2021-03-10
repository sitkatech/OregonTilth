export class CropCreateDto {
    WorkbookID: number;
    CropName: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
