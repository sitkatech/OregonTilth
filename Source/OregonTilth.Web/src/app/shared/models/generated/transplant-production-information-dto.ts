//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInformation]
import { WorkbookDto } from './workbook-dto'
import { CropDto } from './crop-dto'
import { PhaseDto } from './phase-dto'
import { TransplantProductionTrayTypeDto } from './transplant-production-tray-type-dto'

export class TransplantProductionInformationDto {
	TransplantProductionInformationID : number
	Workbook : WorkbookDto
	Crop : CropDto
	Phase : PhaseDto
	TransplantProductionTrayType : TransplantProductionTrayTypeDto
	SeedsPerTray : number
	UsageRate : number
	CostPerSeed : number
	CropSpecificInputCostsPerTray : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}