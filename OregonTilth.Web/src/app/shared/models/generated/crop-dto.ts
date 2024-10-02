//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Crop]
import { WorkbookDto } from './workbook-dto'

export class CropDto {
	CropID : number
	Workbook : WorkbookDto
	CropName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
