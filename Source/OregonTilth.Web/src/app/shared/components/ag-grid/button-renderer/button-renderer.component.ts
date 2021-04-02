import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.scss']
})

export class ButtonRendererComponent implements AgRendererComponent {
  params: any;    

  agInit(params: any): void {
    if(params.value === null)
    {
      params = { value: { ButtonText: "", PrimaryKey: -1, ObjectDisplayName: ""}, data: params.data }
    }
    else
    {
      this.params = params;
    }
  }
  btnClickedHandler() {
    this.params.clicked(this.params.value, this.params.data);
  }

  refresh(params: any): boolean {
      return false;
  }    
}