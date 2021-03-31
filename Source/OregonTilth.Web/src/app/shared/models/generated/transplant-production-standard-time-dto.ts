//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionStandardTime]
import { WorkbookDto } from './workbook-dto'
import { TransplantProductionLaborActivityDto } from './transplant-production-labor-activity-dto'
import { TransplantProductionTrayTypeDto } from './transplant-production-tray-type-dto'

export class TransplantProductionStandardTimeDto {
	TransplantProductionStandardTimeID : number
	Workbook : WorkbookDto
	TransplantProductionLaborActivity : TransplantProductionLaborActivityDto
	TransplantProductionTrayType : TransplantProductionTrayTypeDto
	StandardTimePerUnit : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}