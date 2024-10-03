import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RouteHelpers } from '../../services/router-helper/router-helper';
import { BreadcrumbsService, IBreadcrumb } from '../../services/breadcrumbs.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'oregontilth-breadcrumbs',
  standalone: true,
  imports: [AsyncPipe, RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs$ : Observable<IBreadcrumb[]>;

  constructor(private breadcrumbsService: BreadcrumbsService) {

  }

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbsService.breadcrumbs$;
  }

}
