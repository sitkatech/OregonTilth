import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Alert} from '../../models/alert';
import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-alert-display',
    templateUrl: './alert-display.component.html',
    styleUrls: ['./alert-display.component.css']
})
export class AlertDisplayComponent implements OnDestroy {

    public alerts$: Observable<Alert[]> = this.alertService.alerts$;

    constructor(
        private alertService: AlertService,
    ) {
    }

    public ngOnDestroy(): void {
        this.alertService.clearAlerts();
    }

    public closeAlert(alert: Alert) {
        this.alertService.removeAlert(alert);
    }

}
