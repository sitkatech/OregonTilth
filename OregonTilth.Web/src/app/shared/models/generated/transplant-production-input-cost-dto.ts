//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInputCost]
import { WorkbookDto } from './workbook-dto'
import { TransplantProductionInputDto } from './transplant-production-input-dto'
import { TransplantProductionTrayTypeDto } from './transplant-production-tray-type-dto'

export class TransplantProductionInputCostDto {
	TransplantProductionInputCostID : number
	Workbook : WorkbookDto
	TransplantProductionInput : TransplantProductionInputDto
	TransplantProductionTrayType : TransplantProductionTrayTypeDto
	CostPerTray : number
	Notes : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
