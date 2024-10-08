import { PageDto } from "../generated/page-dto";

export class PageUpdateDto {
    PageID: number;
    PageName: string;
    ParentPageID: number;
    PageContent: string;
    SortOrder: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
