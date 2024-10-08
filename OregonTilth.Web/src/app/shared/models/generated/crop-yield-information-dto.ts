//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropYieldInformation]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { CropUnitDto } from './crop-unit-dto'

export class CropYieldInformationDto {
	CropYieldInformationID : number
	Workbook : WorkbookDto
	Crop : CropDto
	CropUnit : CropUnitDto
	HarvestedYieldPerStandardUnitOfSpace : number
	MarketableYieldPerStandardUnitOfSpace : number
	PackagingCostPerCropUnit : number
	PricePerCropUnit : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
