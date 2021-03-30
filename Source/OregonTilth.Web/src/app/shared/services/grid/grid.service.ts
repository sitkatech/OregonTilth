import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRouteService } from '../api-route/api-route.service';
import { Router } from '@angular/router';
import { Observable, throwError as _throw } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BusyService } from '../busy/busy.service';
import { AlertService } from '../alert.service';
import { Alert } from 'src/app/shared/models/alert';
import { OAuthService } from 'angular-oauth2-oidc';
import { AlertContext } from '../../models/enums/alert-context.enum';
@Injectable({
    providedIn: 'root'
})

export class GridService {

    constructor() {
    }


    currencyFormatter(params): string {
        return '$' + params.value;
    }

    currencyFormatterToFixed(params): string {
        debugger;
        return '$' + params.value.toFixed(2);
    }

}
