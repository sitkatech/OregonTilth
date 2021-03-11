//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Workbook]
import { UserDto } from './user-dto'

export class WorkbookDto {
	WorkbookID : number
	User : UserDto
	CreateDate : Date
	WorkbookName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}