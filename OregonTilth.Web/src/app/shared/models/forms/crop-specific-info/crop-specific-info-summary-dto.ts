import { CropDto } from "../../generated/crop-dto";
import { TpOrDsTypeDto } from "../../generated/tp-or-ds-type-dto";

export class CropSpecificInfoSummaryDto {
    CropSpecificInfoID: number;
    WorkbookID: number;
    Crop: CropDto;
    TpOrDsType: TpOrDsTypeDto;
    RowsPerStandardWidth: number;
    DripTapeRowsPerStandardWidth: number;
    InRowSpacing: number;
    SeedCostPerStandardUnitOfSpace: number;
    TransplantProductionCostOutsourced: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
