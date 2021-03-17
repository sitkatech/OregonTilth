//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborByCrop]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { FieldLaborActivityDto } from './field-labor-activity-dto'
import { LaborTypeDto } from './labor-type-dto'

export class FieldLaborByCropDto {
	FieldLaborByCropID : number
	Workbook : WorkbookDto
	Crop : CropDto
	FieldLaborActivity : FieldLaborActivityDto
	LaborType : LaborTypeDto
	Occurrences : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}