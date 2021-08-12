import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'fresca-link-renderer',
  templateUrl: './link-renderer.component.html',
  styleUrls: ['./link-renderer.component.scss']
})

export class LinkRendererComponent implements AgRendererComponent {
  params: any;    
  
  constructor(
    private ngZone: NgZone,
    private router: Router) { }
    
  agInit(params: any): void {
    if(params.value === null)
    {
      params = { value: { LinkDisplay: "", LinkValue: ""}, inRouterLink: ""}
    }
    else
    {
      this.params = params;
    }
  }

  refresh(params: any): boolean {
      return false;
  }    
  
  navigate(link) {
    this.ngZone.run(() => {
        this.router.navigate([link, this.params.value.LinkValue]);
    });
  }
}