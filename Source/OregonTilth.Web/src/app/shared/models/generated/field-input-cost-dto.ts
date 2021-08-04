//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputCost]
import { WorkbookDto } from './workbook-dto'
import { FieldUnitTypeDto } from './field-unit-type-dto'

export class FieldInputCostDto {
	FieldInputCostID : number
	Workbook : WorkbookDto
	FieldUnitType : FieldUnitTypeDto
	FieldInputCostName : string
	CostPerFieldUnit : number
	Notes : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
