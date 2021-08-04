//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[HarvestPostHarvestStandardTime]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { CropUnitDto } from './crop-unit-dto'
import { HarvestTypeDto } from './harvest-type-dto'

export class HarvestPostHarvestStandardTimeDto {
	HarvestPostHarvestStandardTimeID : number
	Workbook : WorkbookDto
	Crop : CropDto
	CropUnit : CropUnitDto
	HarvestType : HarvestTypeDto
	StandardTimePerUnit : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
