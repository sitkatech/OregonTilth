//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Machinery]
import { WorkbookDto } from './workbook-dto'

export class MachineryDto {
	MachineryID : number
	Workbook : WorkbookDto
	MachineryName : string
	StandardMachineryCost : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
