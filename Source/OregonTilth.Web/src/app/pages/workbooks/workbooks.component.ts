import { Component, OnInit } from '@angular/core';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';

@Component({
  selector: 'workbooks',
  templateUrl: './workbooks.component.html',
  styleUrls: ['./workbooks.component.scss']
})
export class WorkbooksComponent implements OnInit {

  constructor() { }

  public richTextTypeID : number = CustomRichTextType.PlatformOverview;

  ngOnInit() {
  }

}
