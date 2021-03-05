import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkbookComponent } from './new-workbook.component';

describe('WorkbooksComponent', () => {
  let component: NewWorkbookComponent;
  let fixture: ComponentFixture<NewWorkbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
