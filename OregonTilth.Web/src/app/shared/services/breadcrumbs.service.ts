import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService implements OnInit, OnDestroy{
  private navSubscription: Subscription = Subscription.EMPTY;
  private breadcrumbsSubject : BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.navSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.breadcrumbsSubject.next([]);
    });
    
  }
  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }

  setBreadcrumbs(breadcrumbs: IBreadcrumb[]){
    this.breadcrumbsSubject.next(breadcrumbs);
  }
  
}

export interface IBreadcrumb {
  label: string;
  routerLink?: string[];
}