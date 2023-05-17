import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkbooksComponent } from './workbooks.component';

describe('WorkbooksComponent', () => {
  let component: WorkbooksComponent;
  let fixture: ComponentFixture<WorkbooksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
