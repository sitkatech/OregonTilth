import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransplantProductionInputCostsComponent } from './transplant-production-input-costs.component';

describe('TransplantProductionInputCostsComponent', () => {
  let component: TransplantProductionInputCostsComponent;
  let fixture: ComponentFixture<TransplantProductionInputCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransplantProductionInputCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransplantProductionInputCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
