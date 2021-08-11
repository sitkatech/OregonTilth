import { PageDto } from "../generated/page-dto";

export class PageTreeDto {
    ParentPage: PageDto;
    Children: PageDto[];
    PageID: number;
    PageName: string;
    PageContent: string;
}
