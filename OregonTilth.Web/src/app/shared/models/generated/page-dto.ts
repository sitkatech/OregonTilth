//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Page]


export class PageDto {
	PageID : number
	PageName : string
	PageContent : string
	SortOrder : number
	ParentPageID : number

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
