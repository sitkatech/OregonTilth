//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Page]


export class PageMinimalDto {
	PageID : number
	PageName : string
	PageContent : string
	SortOrder : number
	ParentPageID : number
	ParentPageName : string

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
