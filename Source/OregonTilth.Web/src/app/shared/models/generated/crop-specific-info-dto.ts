//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CropSpecificInfo]
import { TpOrDsTypeDto } from './tp-or-ds-type-dto'

export class CropSpecificInfoDto {
	CropSpecificInfoID : number
	TpOrDsType : TpOrDsTypeDto
	RowsPerStandardWidth : number
	DripTapeRowsPerStandardWidth : number
	InRowSpacing : number
	SeedCostPerStandardUnitOfSpace : number
	TransplantProductionCostOutsourced : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}