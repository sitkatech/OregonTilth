//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivity]
import { WorkbookDto } from './workbook-dto'

export class TransplantProductionLaborActivityDto {
	TransplantProductionLaborActivityID : number
	Workbook : WorkbookDto
	TransplantProductionLaborActivityName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}