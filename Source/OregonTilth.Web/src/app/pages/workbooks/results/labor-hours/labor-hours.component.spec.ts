import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborHoursComponent } from './labor-hours.component';

describe('LaborHoursComponent', () => {
  let component: LaborHoursComponent;
  let fixture: ComponentFixture<LaborHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
