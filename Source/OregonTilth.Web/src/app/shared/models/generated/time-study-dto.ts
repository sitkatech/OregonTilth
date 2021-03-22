//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TimeStudy]
import { WorkbookDto } from './workbook-dto'
import { FieldStandardTimeDto } from './field-standard-time-dto'

export class TimeStudyDto {
	TimeStudyID : number
	Workbook : WorkbookDto
	FieldStandardTime : FieldStandardTimeDto
	Duration : number
	Units : number
	Notes : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}