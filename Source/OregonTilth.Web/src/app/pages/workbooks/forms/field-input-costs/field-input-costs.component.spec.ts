import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInputCostsComponent } from './field-input-costs.component';

describe('FieldLaborActivitiesComponent', () => {
  let component: FieldInputCostsComponent;
  let fixture: ComponentFixture<FieldInputCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInputCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
