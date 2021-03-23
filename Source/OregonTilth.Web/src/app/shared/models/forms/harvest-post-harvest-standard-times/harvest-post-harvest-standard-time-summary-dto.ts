import { CropDto } from "../../generated/crop-dto";
import { CropUnitDto } from "../../generated/crop-unit-dto";
import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";
import { FieldUnitTypeDto } from "../../generated/field-unit-type-dto";
import { HarvestTypeDto } from "../../generated/harvest-type-dto";
import { LaborTypeDto } from "../../generated/labor-type-dto";
import { MachineryDto } from "../../generated/machinery-dto";

export class HarvestPostHarvestStandardTimeSummaryDto {
    HarvestPostHarvestStandardTimeID: number;
    WorkbookID: number;
    CropID: number;
    Crop: CropDto;
    CropUnitID: number;
    CropUnit: CropUnitDto;
    HarvestTypeID: number;
    HarvestType: HarvestTypeDto;
    StandardTimePerUnit: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
