//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[FieldInputByCrop]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { FieldInputByCostDto } from './field-input-by-cost-dto'

export class FieldInputByCropDto {
	FieldInputByCropID : number
	Workbook : WorkbookDto
	Crop : CropDto
	FieldInputByCost : FieldInputByCostDto
	Occurances : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}