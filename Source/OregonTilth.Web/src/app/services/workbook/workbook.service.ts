import { Injectable } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { ApiService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { UserCreateDto } from 'src/app/shared/models/user/user-create-dto';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';

@Injectable({
    providedIn: 'root'
})
export class WorkbookService {
    constructor(private apiService: ApiService) { }

    getWorkbooks(currentUser: UserDetailedDto): Observable<WorkbookDto[]> {
        let route = `/workbooks`;
        return this.apiService.getFromApi(route);
    }

    createWorkbook(createWorkbookDto: any): Observable<WorkbookDto> {
        let route = `/workbooks/`;
        return this.apiService.postToApi(route, createWorkbookDto);
    }

}
