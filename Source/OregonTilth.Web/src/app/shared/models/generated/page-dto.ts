//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Page]
import { CustomRichTextTypeDto } from './custom-rich-text-type-dto'

export class PageDto {
	PageID : number
	CustomRichTextType : CustomRichTextTypeDto
	SortOrder : number
	ParentPageID : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
