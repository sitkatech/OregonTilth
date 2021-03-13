import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LaborTypeDto } from 'src/app/shared/models/generated/labor-type-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';

@Injectable({
    providedIn: 'root'
})
export class LookupTablesService {
    constructor(private apiService: ApiService) { }

    getFieldLaborActivityCategories(): Observable<FieldLaborActivityCategoryDto[]> {
        let route = `/lookupTable/field-labor-activity-categories`;
        return this.apiService.getFromApi(route);
    }

    getLaborTypes(): Observable<LaborTypeDto[]> {
        let route = `/lookupTable/labor-types`;
        return this.apiService.getFromApi(route);
    }

    
    getFieldUnitTypes(): Observable<FieldUnitTypeDto[]> {
        let route = `/lookupTable/field-unit-types`;
        return this.apiService.getFromApi(route);
    }

}
