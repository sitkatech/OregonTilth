import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookDetailComponent } from './workbook-detail.component';

describe('WorkbookDetailComponent', () => {
  let component: WorkbookDetailComponent;
  let fixture: ComponentFixture<WorkbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
