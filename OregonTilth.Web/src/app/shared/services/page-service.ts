import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { Observable } from 'rxjs';
import { FieldDefinitionDto } from '../models/generated/field-definition-dto';
import { PageDto } from '../models/generated/page-dto';
import { PageCreateDto } from '../models/page/page-create-dto';
import { PageTreeDto } from '../models/page/page-tree-dto';
import { PageUpdateDto } from '../models/page/page-update-dto';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private apiService: ApiService) { }

  public listAllPages(): Observable<Array<PageTreeDto>> {
    return this.apiService.getFromApi(`/pages`);
  }

  public getPage(pageID: number): Observable<PageTreeDto> {
    return this.apiService.getFromApi(`/pages/${pageID}`);
  }

  public createPage(pageCreateDto: PageCreateDto): Observable<Array<PageTreeDto>> {
    return this.apiService.postToApi(`pages`, pageCreateDto);
  }
  public updatePage(pageUpdateDto: PageUpdateDto): Observable<PageDto> {
    return this.apiService.putToApi(`pages/${pageUpdateDto.PageID}`, pageUpdateDto);
  }
  public deletePage(pageID: number): Observable<Array<PageTreeDto>> {
    return this.apiService.deleteToApi(`pages/${pageID}`);
  }
}