export class CropYieldInformationCreateDto {
    WorkbookID: number;
    CropID: number;
    CropUnitID: number;
    HarvestedYieldPerStandardUnitOfSpace: number;
    MarketableYieldPerStandardUnitOfSpace: number;
    PackagingCostPerCropUnit: number;
    PricePerCropUnit: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
