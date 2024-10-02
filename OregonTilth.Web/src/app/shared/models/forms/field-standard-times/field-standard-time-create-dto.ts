import { FieldLaborActivityDto } from "../../generated/field-labor-activity-dto";
import { FieldUnitTypeDto } from "../../generated/field-unit-type-dto";
import { LaborTypeDto } from "../../generated/labor-type-dto";
import { MachineryDto } from "../../generated/machinery-dto";

export class FieldStandardTimeCreateDto {
    WorkbookID: number;
    FieldLaborActivityID: number;
    FieldLaborActivity: FieldLaborActivityDto;
    LaborTypeID: number;
    LaborType: LaborTypeDto;
    MachineryID: number;
    Machinery: MachineryDto;
    FieldUnitTypeID: number;
    FieldUnitType: FieldUnitTypeDto;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
