import { Injectable } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { ApiService } from 'src/app/shared/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldLaborActivityCreateDto } from 'src/app/shared/models/forms/field-labor-activities/field-labor-activity-create-dto';
import { MachineryDto } from 'src/app/shared/models/generated/machinery-dto';
import { MachineryCreateDto } from 'src/app/shared/models/forms/machinery/machinery-create-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropCreateDto } from 'src/app/shared/models/forms/crops/crop-create-dto';
import { CropUnitCreateDto } from 'src/app/shared/models/forms/crop-units/crop-unit-create-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';
import { FieldLaborByCropCreateDto } from 'src/app/shared/models/forms/field-labor-by-crop/field-labor-by-crop-create-dto';
import { FieldLaborByCropDto } from 'src/app/shared/models/generated/field-labor-by-crop-dto';
import { TransplantProductionLaborActivityDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-dto';
import { TransplantProductionLaborActivityCreateDto } from 'src/app/shared/models/forms/transplant-production-labor-activities/transplant-production-labor-activity-create-dto';
import { FieldInputCostDto } from 'src/app/shared/models/generated/field-input-cost-dto';
import { FieldInputCostCreateDto } from 'src/app/shared/models/forms/field-input-cost/field-input-cost-create-dto';
import { TransplantProductionLaborByCropCreateDto } from 'src/app/shared/models/forms/transplant-production-labor-by-crop/transplant-production-labor-by-crop-create-dto';
import { TransplantProductionLaborActivityByCropDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-by-crop-dto';
import { TransplantProductionInputCreateDto } from 'src/app/shared/models/forms/transplant-production-inputs/transplant-production-input-create-dto';
import { TransplantProductionInputDto } from 'src/app/shared/models/generated/transplant-production-input-dto';
import { TransplantProductionTrayTypeCreateDto } from 'src/app/shared/models/forms/transplant-production-tray-types/transplant-production-tray-type-create-dto';
import { TransplantProductionTrayTypeDto } from 'src/app/shared/models/generated/transplant-production-tray-type-dto';
import { TransplantProductionInputCostCreateDto } from 'src/app/shared/models/forms/transplant-production-input-costs/transplant-production-input-cost-create-dto';
import { TransplantProductionInputCostDto } from 'src/app/shared/models/generated/transplant-production-input-cost-dto';
import { FieldInputByCropDto } from 'src/app/shared/models/generated/field-input-by-crop-dto';
import { FieldInputByCropCreateDto } from 'src/app/shared/models/forms/field-input-by-crop/field-input-by-crop-create-dto';
import { TransplantProductionInformationCreateDto } from 'src/app/shared/models/forms/transplant-production-information/transplant-production-information-create-dto';
import { TransplantProductionInformationDto } from 'src/app/shared/models/generated/transplant-production-information-dto';
import { FieldStandardTimeSummaryDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-summary-dto';
import { vFieldLaborActivityForTimeStudyDto } from 'src/app/shared/models/forms/field-standard-times/vFieldLaborActivityForTimeStudyDto';
import { FieldStandardTimeDto } from 'src/app/shared/models/generated/field-standard-time-dto';
import { FieldStandardTimeCreateDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-create-dto';
import { HarvestPostHarvestStandardTimeSummaryDto } from 'src/app/shared/models/forms/harvest-post-harvest-standard-times/harvest-post-harvest-standard-time-summary-dto';
import { HarvestPostHarvestStandardTimeCreateDto } from 'src/app/shared/models/forms/harvest-post-harvest-standard-times/harvest-post-harvest-standard-time-create-dto';
import { TransplantProductionStandardTimeSummaryDto } from 'src/app/shared/models/forms/transplant-production-standard-times/transplant-production-standard-time-summary-dto';
import { TransplantProductionStandardTimeCreateDto } from 'src/app/shared/models/forms/transplant-production-standard-times/transplant-production-standard-time-create-dto';
import { CropYieldInformationCreateDto } from 'src/app/shared/models/forms/crop-yield-information/crop-yield-information-create-dto';
import { CropYieldInformationDto } from 'src/app/shared/models/generated/crop-yield-information-dto';
import { CropYieldInformationSummaryDto } from 'src/app/shared/models/forms/crop-yield-information/crop-yield-information-summary-dto';
import { CropSpecificInfoDto } from 'src/app/shared/models/generated/crop-specific-info-dto';
import { CropSpecificInfoCreateDto } from 'src/app/shared/models/forms/crop-specific-info/crop-specific-info-create-dto';
import { CropSpecificInfoSummaryDto } from 'src/app/shared/models/forms/crop-specific-info/crop-specific-info-summary-dto';

@Injectable({
    providedIn: 'root'
})
export class WorkbookService {

    public workbookSubject: BehaviorSubject<WorkbookDto> = new BehaviorSubject(null);

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
        let route = `/workbooks/${workbookDto.WorkbookID}`;
        return this.apiService.putToApi(route, workbookDto);
    }

    deleteWorkbook(workbookID: number): Observable<WorkbookDto> {
        let route = `/workbooks/${workbookID}`;
        return this.apiService.deleteToApi(route);
    }

    duplicateWorkbook(workbookID: number, workbookCopyName: string): Observable<WorkbookDto> {
        let route = `/workbooks/${workbookID}/duplicate`;
        return this.apiService.postToApi(route, {WorkbookCopyName: workbookCopyName});
    }

    // Field Labor Activity Form
    addFieldLaborActivity(fieldLaborActivityCreateDto: FieldLaborActivityCreateDto): Observable<FieldLaborActivityDto> {
        let route = `/workbooks/${fieldLaborActivityCreateDto.WorkbookID}/forms/field-labor-activities`;
        return this.apiService.postToApi(route, fieldLaborActivityCreateDto);
    }

    getFieldLaborActivities(workbookID: number): Observable<FieldLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-activities`;
        return this.apiService.getFromApi(route);
    }

    updateFieldLaborActivity(fieldLaborActivity: FieldLaborActivityDto): Observable<FieldLaborActivityDto> {
        let route = `/workbooks/${fieldLaborActivity.Workbook.WorkbookID}/forms/field-labor-activities`;
        return this.apiService.putToApi(route, fieldLaborActivity);
    }

    deleteFieldLaborActivity(workbookID:number, fieldLaborActivityID: number): Observable<FieldLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-activities/${fieldLaborActivityID}`;
        return this.apiService.deleteToApi(route);
    }


    // Machinery Form
    addMachinery(machineryCreateDto: MachineryCreateDto): Observable<MachineryDto> {
        let route = `/workbooks/${machineryCreateDto.WorkbookID}/forms/machinery`;
        return this.apiService.postToApi(route, machineryCreateDto);
    }

    getMachinery(workbookID: number): Observable<MachineryDto[]> {
        let route = `workbooks/${workbookID}/forms/machinery`;
        return this.apiService.getFromApi(route);
    }

    updateMachinery(machinery: MachineryDto): Observable<MachineryDto> {
        let route = `/workbooks/${machinery.Workbook.WorkbookID}/forms/machinery`;
        return this.apiService.putToApi(route, machinery);
    }

    deleteMachinery(workbookID:number, machineryID: number): Observable<MachineryDto[]> {
        let route = `workbooks/${workbookID}/forms/machinery/${machineryID}`;
        return this.apiService.deleteToApi(route);
    }

    // Field Labor By Crop Form
    addFieldLaborByCrop(fieldLaborByCropCreateDto: FieldLaborByCropCreateDto): Observable<FieldLaborByCropDto[]> {
        let route = `/workbooks/${fieldLaborByCropCreateDto.WorkbookID}/forms/field-labor-by-crop`;
        return this.apiService.postToApi(route, fieldLaborByCropCreateDto);
    }

    getFieldLaborByCrops(workbookID: number): Observable<FieldLaborByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-by-crop`;
        return this.apiService.getFromApi(route);
    }

    updateFieldLaborByCrop(fieldLaborByCrop: FieldLaborByCropDto): Observable<FieldLaborByCropDto> {
        let route = `/workbooks/${fieldLaborByCrop.Workbook.WorkbookID}/forms/field-labor-by-crop`;
        return this.apiService.putToApi(route, fieldLaborByCrop);
    }

    deleteFieldLaborByCrop(workbookID:number, fieldLaborByCropID: number): Observable<FieldLaborByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/field-labor-by-crop/${fieldLaborByCropID}`;
        return this.apiService.deleteToApi(route);
    }

    // Crops form
    addCrop(cropCreateDto: CropCreateDto): Observable<CropDto[]> {
        let route = `/workbooks/${cropCreateDto.WorkbookID}/forms/crops`;
        return this.apiService.postToApi(route, cropCreateDto);
    }

    getCrops(workbookID: number): Observable<CropDto[]> {
        let route = `workbooks/${workbookID}/forms/crops`;
        return this.apiService.getFromApi(route);
    }

    updateCrop(crop: CropDto): Observable<CropDto> {
        let route = `/workbooks/${crop.Workbook.WorkbookID}/forms/crops`;
        return this.apiService.putToApi(route, crop);
    }

    deleteCrop(workbookID:number, cropID: number): Observable<CropDto[]> {
        let route = `workbooks/${workbookID}/forms/crops/${cropID}`;
        return this.apiService.deleteToApi(route);
    }

    // Crop Units form
    addCropUnit(cropUnitCreateDto: CropUnitCreateDto): Observable<CropUnitDto[]> {
        let route = `/workbooks/${cropUnitCreateDto.WorkbookID}/forms/crop-units`;
        return this.apiService.postToApi(route, cropUnitCreateDto);
    }

    getCropUnits(workbookID: number): Observable<CropUnitDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-units`;
        return this.apiService.getFromApi(route);
    }

    updateCropUnit(cropUnit: CropUnitDto): Observable<CropUnitDto> {
        let route = `/workbooks/${cropUnit.Workbook.WorkbookID}/forms/crop-units`;
        return this.apiService.putToApi(route, cropUnit);
    }

    deleteCropUnit(workbookID:number, cropUnitID: number): Observable<CropUnitDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-units/${cropUnitID}`;
        return this.apiService.deleteToApi(route);
    }


    // TransplantProduction Labor Activity Form
    addTransplantProductionLaborActivity(transplantProductionLaborActivityCreateDto: TransplantProductionLaborActivityCreateDto): Observable<TransplantProductionLaborActivityDto[]> {
        let route = `/workbooks/${transplantProductionLaborActivityCreateDto.WorkbookID}/forms/transplant-production-labor-activities`;
        return this.apiService.postToApi(route, transplantProductionLaborActivityCreateDto);
    }

    getTransplantProductionLaborActivities(workbookID: number): Observable<TransplantProductionLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-labor-activities`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionLaborActivity(transplantProductionLaborActivityDto: TransplantProductionLaborActivityDto): Observable<TransplantProductionLaborActivityDto> {
        let route = `/workbooks/${transplantProductionLaborActivityDto.Workbook.WorkbookID}/forms/transplant-production-labor-activities`;
        return this.apiService.putToApi(route, transplantProductionLaborActivityDto);
    }

    deleteTransplantProductionLaborActivity(workbookID:number, fieldLaborActivityID: number): Observable<TransplantProductionLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-labor-activities/${fieldLaborActivityID}`;
        return this.apiService.deleteToApi(route);
    }

    // Transplant Production Labor By Crop Form
    addTransplantProductionLaborByCrop(transplantProductionLaborByCropCreateDto: TransplantProductionLaborByCropCreateDto): Observable<TransplantProductionLaborActivityByCropDto[]> {
        let route = `/workbooks/${transplantProductionLaborByCropCreateDto.WorkbookID}/forms/transplant-production-labor-by-crop`;
        return this.apiService.postToApi(route, transplantProductionLaborByCropCreateDto);
    }

    getTransplantProductionLaborByCrops(workbookID: number): Observable<TransplantProductionLaborActivityByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-labor-by-crop`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionLaborByCrop(transplantProductionLaborByCrop: TransplantProductionLaborActivityByCropDto): Observable<TransplantProductionLaborActivityByCropDto> {
        let route = `/workbooks/${transplantProductionLaborByCrop.Workbook.WorkbookID}/forms/transplant-production-labor-by-crop`;
        return this.apiService.putToApi(route, transplantProductionLaborByCrop);
    }

    deleteTransplantProductionLaborByCrop(workbookID:number, transplantProductionLaborByCropID: number): Observable<TransplantProductionLaborActivityByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-labor-by-crop/${transplantProductionLaborByCropID}`;
        return this.apiService.deleteToApi(route);
    }

    getTransplantProductionLaborActivitiesFromTransplantProductionStandardTimes(workbookID: number): Observable<TransplantProductionLaborActivityDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-labor-activities-from-tp-standard-times`;
        return this.apiService.getFromApi(route);
    }

    // Field Input Cost Form
    addFieldInputCost(fieldInputByCostCreateDto: FieldInputCostCreateDto): Observable<FieldInputCostDto> {
        let route = `/workbooks/forms/field-input-costs`;
        return this.apiService.postToApi(route, fieldInputByCostCreateDto);
    }

    getFieldInputCosts(workbookID: number): Observable<FieldInputCostDto[]> {
        let route = `workbooks/${workbookID}/forms/field-input-costs`;
        return this.apiService.getFromApi(route);
    }

    updateFieldInputCost(fieldInputByCost: FieldInputCostDto): Observable<FieldInputCostDto> {
        let route = `/workbooks/forms/field-input-costs`;
        return this.apiService.putToApi(route, fieldInputByCost);
    }

    deleteFieldInputCost(workbookID:number, fieldInputByCostID: number): Observable<FieldInputCostDto[]> {
        let route = `workbooks/${workbookID}/forms/field-input-costs/${fieldInputByCostID}`;
        return this.apiService.deleteToApi(route);
    }

    // Transplant Production Inputs Form
    addTransplantProductionInput(transplantProductionInputCreateDto: TransplantProductionInputCreateDto): Observable<TransplantProductionInputDto> {
        let route = `/workbooks/${transplantProductionInputCreateDto.WorkbookID}/forms/transplant-production-inputs`;
        return this.apiService.postToApi(route, transplantProductionInputCreateDto);
    }

    getTransplantProductionInputs(workbookID: number): Observable<TransplantProductionInputDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-inputs`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionInput(transplantProductionInput: TransplantProductionInputDto): Observable<TransplantProductionInputDto> {
        let route = `/workbooks/${transplantProductionInput.Workbook.WorkbookID}/forms/transplant-production-inputs`;
        return this.apiService.putToApi(route, transplantProductionInput);
    }

    deleteTransplantProductionInput(workbookID:number, transplantProductionInputID: number): Observable<TransplantProductionInputDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-inputs/${transplantProductionInputID}`;
        return this.apiService.deleteToApi(route);
    }

    // Transplant Production Tray Types Form
    addTransplantProductionTrayType(transplantProductionTrayTypeCreateDto: TransplantProductionTrayTypeCreateDto): Observable<TransplantProductionTrayTypeDto[]> {
        let route = `/workbooks/${transplantProductionTrayTypeCreateDto.WorkbookID}/forms/transplant-production-tray-types`;
        return this.apiService.postToApi(route, transplantProductionTrayTypeCreateDto);
    }

    getTransplantProductionTrayTypes(workbookID: number): Observable<TransplantProductionTrayTypeDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-tray-types`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionTrayType(transplantProductionTrayTypeDto: TransplantProductionTrayTypeDto): Observable<TransplantProductionTrayTypeDto> {
        let route = `/workbooks/${transplantProductionTrayTypeDto.Workbook.WorkbookID}/forms/transplant-production-tray-types`;
        return this.apiService.putToApi(route, transplantProductionTrayTypeDto);
    }

    deleteTransplantProductionTrayType(workbookID:number, transplantProductionTrayTypeID: number): Observable<TransplantProductionTrayTypeDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-tray-types/${transplantProductionTrayTypeID}`;
        return this.apiService.deleteToApi(route);
    }


    // TP Input Cost Form
    addTransplantProductionInputCost(transplantProductionInputCostCreateDto: TransplantProductionInputCostCreateDto): Observable<TransplantProductionInputCostDto> {
        let route = `/workbooks/${transplantProductionInputCostCreateDto.WorkbookID}/forms/transplant-production-input-costs`;
        return this.apiService.postToApi(route, transplantProductionInputCostCreateDto);
    }

    getTransplantProductionInputCosts(workbookID: number): Observable<TransplantProductionInputCostDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-input-costs`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionInputCost(transplantProductionInputCostDto: TransplantProductionInputCostDto): Observable<TransplantProductionInputCostDto> {
        let route = `/workbooks/${transplantProductionInputCostDto.Workbook.WorkbookID}/forms/transplant-production-input-costs`;
        return this.apiService.putToApi(route, transplantProductionInputCostDto);
    }

    deleteTransplantProductionInputCost(workbookID:number, transplantProductionInputCostID: number): Observable<TransplantProductionInputCostDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-input-costs/${transplantProductionInputCostID}`;
        return this.apiService.deleteToApi(route);
    }
    // Field Input By Crop Form
    addFieldInputByCrop(fieldInputByCropCreateDto: FieldInputByCropCreateDto): Observable<FieldInputByCropDto[]> {
        let route = `/workbooks/${fieldInputByCropCreateDto.WorkbookID}/forms/field-input-by-crop`;
        return this.apiService.postToApi(route, fieldInputByCropCreateDto);
    }

    getFieldInputByCrops(workbookID: number): Observable<FieldInputByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/field-input-by-crop`;
        return this.apiService.getFromApi(route);
    }

    updateFieldInputByCrop(fieldInputByCrop: FieldInputByCropDto): Observable<FieldInputByCropDto> {
        let route = `/workbooks/${fieldInputByCrop.Workbook.WorkbookID}/forms/field-input-by-crop`;
        return this.apiService.putToApi(route, fieldInputByCrop);
    }

    deleteFieldInputByCrop(workbookID:number, fieldInputByCropID: number): Observable<FieldInputByCropDto[]> {
        let route = `workbooks/${workbookID}/forms/field-input-by-crop/${fieldInputByCropID}`;
        return this.apiService.deleteToApi(route);
    }

    // Transplant Production Information
    addTransplantProductionInformation(tpInfoCreateDto: TransplantProductionInformationCreateDto): Observable<TransplantProductionInformationDto[]> {
        let route = `/workbooks/${tpInfoCreateDto.WorkbookID}/forms/transplant-production-information`;
        return this.apiService.postToApi(route, tpInfoCreateDto);
    }

    getTransplantProductionInformationDtos(workbookID: number): Observable<TransplantProductionInformationDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-information`;
        return this.apiService.getFromApi(route);
    }

    updateTransplantProductionInformation(tpInfo: TransplantProductionInformationDto): Observable<TransplantProductionInformationDto> {
        let route = `/workbooks/${tpInfo.Workbook.WorkbookID}/forms/transplant-production-information`;
        return this.apiService.putToApi(route, tpInfo);
    }

    deleteTransplantProductionInformation(workbookID:number, tpInfoID: number): Observable<TransplantProductionInformationDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-information/${tpInfoID}`;
        return this.apiService.deleteToApi(route);
    }


    // Field Standard Times
    getFieldStandardTimes(workbookID: number): Observable<FieldStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/field-standard-times`;
        return this.apiService.getFromApi(route);
    }

    getFieldLaborActivitiesForTimeStudies(workbookID: number): Observable<vFieldLaborActivityForTimeStudyDto[]> {
        let route = `workbooks/${workbookID}/forms/field-standard-times/time-studies`;
        return this.apiService.getFromApi(route);
    }

    initializeFieldTimeStudy(fieldStandardTimeCreateDto: FieldStandardTimeCreateDto) : Observable<FieldStandardTimeSummaryDto> {
        let route = `workbooks/${fieldStandardTimeCreateDto.WorkbookID}/forms/field-standard-times/initialize`;
        return this.apiService.postToApi(route, fieldStandardTimeCreateDto);
    }

    updateFieldStandardTime(fieldStandardTimeDto: FieldStandardTimeSummaryDto): Observable<FieldStandardTimeSummaryDto> {
        let route = `/workbooks/${fieldStandardTimeDto.WorkbookID}/forms/field-standard-times/${fieldStandardTimeDto.FieldStandardTimeID}`;
        return this.apiService.putToApi(route, fieldStandardTimeDto);
    }

    deleteFieldStandardTime(workbookID: number, fieldStandardTimeID: number): Observable<FieldStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/field-standard-times/${fieldStandardTimeID}`;
        return this.apiService.deleteToApi(route);
    }


    // Harvest Post-Harvest Standard Times
    getHarvestPostHarvestStandardTimes(workbookID: number): Observable<HarvestPostHarvestStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/harvest-post-harvest-standard-times`;
        return this.apiService.getFromApi(route);
    }

    initializeHarvestPostHarvestTimeStudy(harvestPostHarvestStandardTimeCreateDto: HarvestPostHarvestStandardTimeCreateDto) : Observable<HarvestPostHarvestStandardTimeSummaryDto> {
        let route = `workbooks/${harvestPostHarvestStandardTimeCreateDto.WorkbookID}/forms/harvest-post-harvest-standard-times/initialize`;
        return this.apiService.postToApi(route, harvestPostHarvestStandardTimeCreateDto);
    }

    updateHarvestPostHarvestStandardTime(harvestPostHarvestStandardTimeDto: HarvestPostHarvestStandardTimeSummaryDto): Observable<HarvestPostHarvestStandardTimeSummaryDto> {
        let route = `/workbooks/${harvestPostHarvestStandardTimeDto.WorkbookID}/forms/harvest-post-harvest-standard-times/${harvestPostHarvestStandardTimeDto.HarvestPostHarvestStandardTimeID}`;
        return this.apiService.putToApi(route, harvestPostHarvestStandardTimeDto);
    }

    deleteHarvestPostHarvestStandardTime(workbookID: number, harvestPostHarvestStandardTimeID: number): Observable<HarvestPostHarvestStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/harvest-post-harvest-standard-times/${harvestPostHarvestStandardTimeID}`;
        return this.apiService.deleteToApi(route);
    }

    // Transplant Production Standard Times
    getTransplantProductionStandardTimes(workbookID: number): Observable<TransplantProductionStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-standard-times`;
        return this.apiService.getFromApi(route);
    }

    initializeTransplantProductionTimeStudy(transplantProductionStandardTimeCreateDto: TransplantProductionStandardTimeCreateDto) : Observable<TransplantProductionStandardTimeSummaryDto> {
        let route = `workbooks/${transplantProductionStandardTimeCreateDto.WorkbookID}/forms/transplant-production-standard-times/initialize`;
        return this.apiService.postToApi(route, transplantProductionStandardTimeCreateDto);
    }

    updateTransplantProductionStandardTime(transplantProductionStandardTimeDto: TransplantProductionStandardTimeSummaryDto): Observable<TransplantProductionStandardTimeSummaryDto> {
        let route = `/workbooks/${transplantProductionStandardTimeDto.WorkbookID}/forms/transplant-production-standard-times/${transplantProductionStandardTimeDto.TransplantProductionStandardTimeID}`;
        return this.apiService.putToApi(route, transplantProductionStandardTimeDto);
    }

    deleteTransplantProductionStandardTime(workbookID: number, transplantProductionStandardTimeID: number): Observable<TransplantProductionStandardTimeSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/transplant-production-standard-times/${transplantProductionStandardTimeID}`;
        return this.apiService.deleteToApi(route);
    }

    // Crop Yield Information
    addCropYieldInformation(createDto: CropYieldInformationCreateDto): Observable<CropYieldInformationSummaryDto> {
        let route = `/workbooks/${createDto.WorkbookID}/forms/crop-yield-information`;
        return this.apiService.postToApi(route, createDto);
    }

    getAvailableCropUnitCombinationsForCropYieldInformation(workbookID: number): Observable<CropYieldInformationSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/available-crop-yield-information`;
        return this.apiService.getFromApi(route);
    }

    getCropYieldInformation(workbookID: number): Observable<CropYieldInformationSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-yield-information`;
        return this.apiService.getFromApi(route);
    }

    updateCropYieldInformation(updateDto: CropYieldInformationSummaryDto): Observable<CropYieldInformationSummaryDto> {
        let route = `/workbooks/${updateDto.WorkbookID}/forms/crop-yield-information`;
        return this.apiService.putToApi(route, updateDto);
    }

    deleteCropYieldInformation(workbookID:number, cropYieldInformationID: number): Observable<CropYieldInformationSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-yield-information/${cropYieldInformationID}`;
        return this.apiService.deleteToApi(route);
    }


    // Crop Specific Info form
    /* addCropSpecificInfo(cropSpecificInfoCreateDto: CropSpecificInfoCreateDto): Observable<CropSpecificInfoDto[]> {
        let route = `/workbooks/${cropSpecificInfoCreateDto.WorkbookID}/forms/crop-specific-info`;
        return this.apiService.postToApi(route, cropSpecificInfoCreateDto);
    } */

    initializeCropSpecificInfo(cropSpecificInfoCreateDto: CropSpecificInfoCreateDto) : Observable<CropSpecificInfoSummaryDto> {
        let route = `workbooks/${cropSpecificInfoCreateDto.WorkbookID}/forms/crop-specific-info/initialize`;
        return this.apiService.postToApi(route, cropSpecificInfoCreateDto);
    }

    getCropSpecificInfos(workbookID: number): Observable<CropSpecificInfoSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-specific-info`;
        return this.apiService.getFromApi(route);
    }

    updateCropSpecificInfo(cropSpecificInfo: CropSpecificInfoSummaryDto): Observable<CropSpecificInfoSummaryDto> {
        let route = `/workbooks/${cropSpecificInfo.WorkbookID}/forms/crop-specific-info`;
        return this.apiService.putToApi(route, cropSpecificInfo);
    }

    deleteCropSpecificInfo(workbookID:number, cropSpecificInfoID: number): Observable<CropSpecificInfoSummaryDto[]> {
        let route = `workbooks/${workbookID}/forms/crop-specific-info/${cropSpecificInfoID}`;
        return this.apiService.deleteToApi(route);
    }

}
