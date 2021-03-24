import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";
import { FieldUnitTypeDto } from "../../generated/field-unit-type-dto";
import { LaborTypeDto } from "../../generated/labor-type-dto";
import { MachineryDto } from "../../generated/machinery-dto";

export class HarvestPostHarvestStandardTimeCreateDto {
    WorkbookID: number;
    CropID: number;
    CropUnitID: number;
    HarvestTypeID: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
