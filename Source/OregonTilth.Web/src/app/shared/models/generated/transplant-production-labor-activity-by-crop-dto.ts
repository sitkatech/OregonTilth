//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionLaborActivityByCrop]
import { WorkbookDto } from './workbook-dto'
import { TransplantProductionLaborActivityDto } from './transplant-production-labor-activity-dto'
import { TransplantProductionInformationDto } from './transplant-production-information-dto'

export class TransplantProductionLaborActivityByCropDto {
	TransplantProductionLaborActivityByCropID : number
	Workbook : WorkbookDto
	TransplantProductionLaborActivity : TransplantProductionLaborActivityDto
	Occurrences : number
	TransplantProductionInformation : TransplantProductionInformationDto
	Notes : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
