import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private navSubscription: Subscription = Subscription.EMPTY;
  private breadcrumbsSubject : BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) { 
    this.navSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.breadcrumbsSubject.next([]);
    });
  }


  setBreadcrumbs(breadcrumbs: IBreadcrumb[]){
    this.breadcrumbsSubject.next(breadcrumbs);
  }
  
}

export interface IBreadcrumb {
  label: string;
  routerLink?: string[];
}