import { Component, OnInit } from '@angular/core';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'fresca-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbsService) { }

  public richTextTypeID : number = CustomRichTextType.PlatformOverview;

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs([{label: "About"}]);
  }

}
