import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LaborTypeDto } from 'src/app/shared/models/generated/labor-type-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { PhaseDto } from 'src/app/shared/models/generated/phase-dto';
import { HarvestTypeDto } from 'src/app/shared/models/generated/harvest-type-dto';
import { TpOrDsTypeDto } from 'src/app/shared/models/generated/tp-or-ds-type-dto';

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

    getPhases(): Observable<PhaseDto[]> {
        let route = `/lookupTable/phases`;
        return this.apiService.getFromApi(route);
    }
    
    getFieldUnitTypes(): Observable<FieldUnitTypeDto[]> {
        let route = `/lookupTable/field-unit-types`;
        return this.apiService.getFromApi(route);
    }

    getHarvestTypes(): Observable<HarvestTypeDto[]> {
        let route = `/lookupTable/harvest-types`;
        return this.apiService.getFromApi(route);
    }

    getTpOrDsTypes(): Observable<TpOrDsTypeDto[]> {
        let route = `/lookupTable/tp-or-ds-types`;
        return this.apiService.getFromApi(route);
    }

}
