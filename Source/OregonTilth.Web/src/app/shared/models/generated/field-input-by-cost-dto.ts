//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCost]
import { WorkbookDto } from './workbook-dto'
import { FieldUnitTypeDto } from './field-unit-type-dto'

export class FieldInputByCostDto {
	FieldInputByCostID : number
	Workbook : WorkbookDto
	FieldUnitType : FieldUnitTypeDto
	FieldInputByCostName : string
	CostPerFieldUnit : number
	Notes : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}