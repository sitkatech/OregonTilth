import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'time-study-cell-renderer',
  templateUrl: './time-study-cell-renderer.component.html',
  styleUrls: ['./time-study-cell-renderer.component.scss']
})

export class TimeStudyCellRendererComponent implements AgRendererComponent {
  params: any;    

  agInit(params: any): void {
    if(params.value === null)
    {
      params = { value: { FieldStandardTime: null, count:0 } }
    }
    else
    {
      this.params = params;
    }
  }
  
  btnClickedHandler() {
    this.params.clicked(this.params.value);
  }

  refresh(params: any): boolean {
      return false;
  }    
}