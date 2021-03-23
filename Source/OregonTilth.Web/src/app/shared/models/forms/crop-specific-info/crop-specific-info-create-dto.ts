import { CropDto } from "../../generated/crop-dto";
import { TpOrDsTypeDto } from "../../generated/tp-or-ds-type-dto";

export class CropSpecificInfoCreateDto {
    WorkbookID: number;
    CropID: number;
    Crop: CropDto;
    TpOrDsTypeID: number;
    TpOrDsType: TpOrDsTypeDto;
    RowsPerStandardWidth: number;
    DropTapeRowsPerStandardWidth: number;
    InRowSpacing: number;
    SeedCostPerStandardUnitOfSpace: number;
    TransplantProductionCostOutsourced: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
