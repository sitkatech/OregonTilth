import { PageDto } from "../generated/page-dto";

export class PageCreateDto {
    PageName: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
