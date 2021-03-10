//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropUnit]
import { WorkbookDto } from './workbook-dto'

export class CropUnitDto {
	CropUnitID : number
	Workbook : WorkbookDto
	CropUnitName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}