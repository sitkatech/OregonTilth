//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldStandardTime]
import { WorkbookDto } from './workbook-dto'
import { FieldLaborActivityDto } from './field-labor-activity-dto'
import { LaborTypeDto } from './labor-type-dto'
import { MachineryDto } from './machinery-dto'
import { FieldUnitTypeDto } from './field-unit-type-dto'

export class FieldStandardTimeDto {
	FieldStandardTimeID : number
	Workbook : WorkbookDto
	FieldLaborActivity : FieldLaborActivityDto
	LaborType : LaborTypeDto
	Machinery : MachineryDto
	FieldUnitType : FieldUnitTypeDto
	StandardTimePerUnit : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}