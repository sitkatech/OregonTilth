//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionTrayType]
import { WorkbookDto } from './workbook-dto'

export class TransplantProductionTrayTypeDto {
	TransplantProductionTrayTypeID : number
	Workbook : WorkbookDto
	TransplantProductionTrayTypeName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}