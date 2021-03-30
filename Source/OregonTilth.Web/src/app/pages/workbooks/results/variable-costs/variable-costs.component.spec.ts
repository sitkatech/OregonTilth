import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableCostsComponent } from './variable-costs.component';

describe('VariableCostsComponent', () => {
  let component: VariableCostsComponent;
  let fixture: ComponentFixture<VariableCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
