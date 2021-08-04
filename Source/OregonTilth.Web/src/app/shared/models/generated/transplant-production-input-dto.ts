//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInput]
import { WorkbookDto } from './workbook-dto'

export class TransplantProductionInputDto {
	TransplantProductionInputID : number
	Workbook : WorkbookDto
	TransplantProductionInputName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
