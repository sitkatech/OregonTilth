import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { Observable } from 'rxjs';
import { CustomRichTextDetailedDto } from '../models/custom-rich-text-detailed-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomRichTextService {

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  public getCustomRichText(customRichTextTypeID: number): Observable<CustomRichTextDetailedDto> {
    return this.apiService.getFromApi(`/customRichText/${customRichTextTypeID}`);
  }

  public updateCustomRichText(customRichTextTypeID: number, updateDto: CustomRichTextDetailedDto): Observable<CustomRichTextDetailedDto> {
    return this.apiService.putToApi(`customRichText/${customRichTextTypeID}`, updateDto);
  }

  public getCustomRichTexts(): Observable<CustomRichTextDetailedDto[]> {
    return this.apiService.getFromApi(`/customRichText`);
  }
 
}
