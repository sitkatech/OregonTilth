import { Injectable } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { ApiService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
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
import { CropYieldInformationDashboardReportDto } from 'src/app/shared/models/forms/crop-yield-information/crop-yield-information-dashboard-report-dto';

@Injectable({
    providedIn: 'root'
})
export class ResultsService {
    constructor(private apiService: ApiService) { }

    getWorkbooks(currentUser: UserDetailedDto): Observable<WorkbookDto[]> {
        let route = `/workbooks`;
        return this.apiService.getFromApi(route);
    }

    getCropYieldInformationDashboardReportDtos(workbookID: number): Observable<CropYieldInformationDashboardReportDto[]> {
        let route =  `/workbooks/${workbookID}/results/crop-crop-unit`;
        return this.apiService.getFromApi(route);
    }
    
}
