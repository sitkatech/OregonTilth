export class AvailableCropYieldInformationDto {
    CropID: number;
    CropName: string;
    CropUnitID: number;
    CropUnitName: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
