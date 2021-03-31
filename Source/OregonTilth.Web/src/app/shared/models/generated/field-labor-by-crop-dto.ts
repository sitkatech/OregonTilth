//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborByCrop]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { FieldStandardTimeDto } from './field-standard-time-dto'

export class FieldLaborByCropDto {
	FieldLaborByCropID : number
	Workbook : WorkbookDto
	Crop : CropDto
	Occurrences : number
	FieldStandardTime : FieldStandardTimeDto

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}