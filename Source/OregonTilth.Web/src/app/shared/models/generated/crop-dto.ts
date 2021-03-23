//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Crop]
import { WorkbookDto } from './workbook-dto'
import { CropSpecificInfoDto } from './crop-specific-info-dto'

export class CropDto {
	CropID : number
	Workbook : WorkbookDto
	CropName : string
	CropSpecificInfo : CropSpecificInfoDto

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}