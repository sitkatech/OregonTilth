import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LinkRendererComponent } from 'src/app/shared/components/ag-grid/link-renderer/link-renderer.component';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { FieldDefinitionDto } from 'src/app/shared/models/generated/field-definition-dto';
import { PageDto } from 'src/app/shared/models/generated/page-dto';
import { PageCreateDto } from 'src/app/shared/models/page/page-create-dto';
import { FieldDefinitionService } from 'src/app/shared/services/field-definition-service';
import { PageService } from 'src/app/shared/services/page-service';

@Component({
  selector: 'oregontilth-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  @ViewChild("fieldDefinitionsGrid") fieldDefinitionsGrid: AgGridAngular;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;

  public fieldDefinitions: Array<FieldDefinitionDto>
  public richTextTypeID : number = CustomRichTextType.LabelsAndDefinitionsList;

  public model : PageCreateDto;

  public rowData = [];
  public columnDefs: ColDef[];

  constructor(
    private pageService: PageService,
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
     // this.fieldDefinitionsGrid.api.showLoadingOverlay();
      this.model = new PageCreateDto();
      this.pageService.listAllPages().subscribe(pages => {
        console.log(pages);
        // this.fieldDefinitions = fieldDefinitions;
        this.rowData = pages;
        // this.fieldDefinitionsGrid.api.hideOverlay();
        // this.cdr.detectChanges();
      });


      this.columnDefs = [
        {
          headerName: 'Page Name', valueGetter: function (params: any) {
            return { LinkValue: params.data.PageID, LinkDisplay: params.data.PageName };
          }, cellRendererFramework: LinkRendererComponent,
          cellRendererParams: { inRouterLink: "/pages/" },
          filterValueGetter: function (params: any) {
            return params.data.PageName;
          },
          comparator: function (id1: any, id2: any) {
            let link1 = id1.LinkDisplay;
            let link2 = id2.LinkDisplay;
            if (link1 < link2) {
              return -1;
            }
            if (link1 > link2) {
              return 1;
            }
            return 0;
          },
          sortable: true, filter: true, width: 170
        },
        // { headerName: 'Page Name', field: 'PageName',  
        //   cellRenderer:function (params: any) { 
        //     return params.data.PageName ? params.data.PageName : ''
        //   },
        //    autoHeight:true, sortable: true, filter: true, width:100, cellStyle: {'white-space': 'normal'}
        // },
        { headerName: 'Parent Page', field: 'ParentPage.PageName',  
          cellRenderer:function (params: any) { 
            return params.data.ParentPage ? params.data.ParentPage.PageName : ''
          },
           autoHeight:true, sortable: true, filter: true, width:100, cellStyle: {'white-space': 'normal'}
        },
      ];

      this.columnDefs.forEach(x => {
        x.resizable = true;
      });
    });
  }

  onSubmit(pageForm: HTMLFormElement): void {
    
    this.pageService.createPage(this.model).subscribe(response => {
      // this.isLoadingSubmit = false;
      // var transactionRows = this.gridApi.applyTransaction({add: [response]});
      // this.gridApi.flashCells({ rowNodes: transactionRows.add });
      // this.resetForm();
      // this.cdr.detectChanges();
      
    }, error => { 
      // this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.watchUserChangeSubscription.unsubscribe();
    this.authenticationService.dispose();
    this.cdr.detach();
  }

}
