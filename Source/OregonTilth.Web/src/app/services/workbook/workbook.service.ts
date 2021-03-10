import { Injectable } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { ApiService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldLaborActivityCreateDto } from 'src/app/shared/models/forms/field-labor-activities/field-labor-activity-create-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropCreateDto } from 'src/app/shared/models/forms/crops/crop-create-dto';
import { CropUnitCreateDto } from 'src/app/shared/models/forms/crop-units/crop-unit-create-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';

@Injectable({
    providedIn: 'root'
})
export class WorkbookService {
    constructor(private apiService: ApiService) { }

    getWorkbooks(currentUser: UserDetailedDto): Observable<WorkbookDto[]> {
        let route = `/workbooks`;
        return this.apiService.getFromApi(route);
    }

    getWorkbook(workbookID: number): Observable<WorkbookDto> {
        let route = `/workbooks/${workbookID}`;
        return this.apiService.getFromApi(route);
    }

    createWorkbook(createWorkbookDto: WorkbookDto): Observable<WorkbookDto> {
        let route = `/workbooks/`;
        return this.apiService.postToApi(route, createWorkbookDto);
    }

    editWorkbook(workbookDto: WorkbookDto): Observable<WorkbookDto> {
        let route = `/workbooks/`;
        return this.apiService.putToApi(route, workbookDto);
    }

    deleteWorkbook(workbookID: number): Observable<WorkbookDto> {
        let route = `/workbooks/${workbookID}`;
        return this.apiService.deleteToApi(route);
    }

    // Field Labor Activity Form
    addFieldLaborActivity(fieldLaborActivityCreateDto: FieldLaborActivityCreateDto): Observable<FieldLaborActivityDto[]> {
        let route = `/workbooks/forms/field-labor-activities`;
        return this.apiService.postToApi(route, fieldLaborActivityCreateDto);
    }

    getFieldLaborActivities(workbookID: number): Observable<FieldLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-activities`;
        return this.apiService.getFromApi(route);
    }

    updateFieldLaborActivity(fieldLaborActivity: FieldLaborActivityDto): Observable<FieldLaborActivityDto> {
        let route = `/workbooks/forms/field-labor-activities`;
        return this.apiService.putToApi(route, fieldLaborActivity);
    }

    deleteFieldLaborActivity(workbookID:number, fieldLaborActivityID: number): Observable<FieldLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-activities/${fieldLaborActivityID}`;
        return this.apiService.deleteToApi(route);
    }

    // Crops form
    addCrop(cropCreateDto: CropCreateDto): Observable<CropDto[]> {
        let route = `/workbooks/forms/crops`;
        return this.apiService.postToApi(route, cropCreateDto);
    }

    getCrops(workbookID: number): Observable<CropDto[]> {
        let route = `workbooks/${workbookID}/forms/crops`;
        return this.apiService.getFromApi(route);
    }

    updateCrop(crop: CropDto): Observable<CropDto> {
        let route = `/workbooks/forms/crops`;
        return this.apiService.putToApi(route, crop);
    }

    deleteCrop(workbookID:number, cropID: number): Observable<CropDto[]> {
        let route = `workbooks/${workbookID}/forms/crops/${cropID}`;
        return this.apiService.deleteToApi(route);
    }

    // Crop Units form
    addCropUnit(cropUnitCreateDto: CropUnitCreateDto): Observable<CropUnitDto[]> {
        let route = `/workbooks/forms/crop-units`;
        return this.apiService.postToApi(route, cropUnitCreateDto);
    }

    getCropUnits(workbookID: number): Observable<CropUnitDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-units`;
        return this.apiService.getFromApi(route);
    }

    updateCropUnit(cropUnit: CropUnitDto): Observable<CropUnitDto> {
        let route = `/workbooks/forms/crop-units`;
        return this.apiService.putToApi(route, cropUnit);
    }

    deleteCropUnit(workbookID:number, cropUnitID: number): Observable<CropUnitDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-units/${cropUnitID}`;
        return this.apiService.deleteToApi(route);
    }
}
