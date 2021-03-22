//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldLaborActivity]
import { WorkbookDto } from './workbook-dto'
import { FieldLaborActivityCategoryDto } from './field-labor-activity-category-dto'

export class FieldLaborActivityDto {
	FieldLaborActivityID : number
	Workbook : WorkbookDto
	FieldLaborActivityName : string
	FieldLaborActivityCategory : FieldLaborActivityCategoryDto
	LaborTypeCrew : boolean
	LaborTypeOperator : boolean

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}