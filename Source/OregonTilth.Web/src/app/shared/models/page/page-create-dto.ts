import { PageDto } from "../generated/page-dto";

export class PageCreateDto {
    PageName: string;
    ParentPageID: number;
    SortOrder: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
