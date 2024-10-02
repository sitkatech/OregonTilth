import { FieldInputCostDto } from "../../generated/field-input-cost-dto";

export class FieldInputByCropCreateDto {
    WorkbookID: number;
    CropID: number;
    FieldInputCosts: FieldInputCostDto[];
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
