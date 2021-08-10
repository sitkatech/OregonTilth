import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { Observable } from 'rxjs';
import { FieldDefinitionDto } from '../models/generated/field-definition-dto';
import { PageDto } from '../models/generated/page-dto';
import { PageCreateDto } from '../models/page/page-create-dto';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private apiService: ApiService) { }

  public listAllPages(): Observable<Array<PageDto>> {
    return this.apiService.getFromApi(`/pages`);
  }

  // public getFieldDefinition(fieldDefinitionTypeID: number): Observable<FieldDefinitionDto> {
  //   return this.apiService.getFromApi(`/fieldDefinitions/${fieldDefinitionTypeID}`);
  // }

  public createPage(pageCreateDto: PageCreateDto): Observable<PageDto> {
    return this.apiService.postToApi(`pages`, pageCreateDto);
  }
}