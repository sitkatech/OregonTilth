import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestPostHarvestStandardTimesComponent } from './harvest-post-harvest-standard-times.component';

describe('HarvestPostHarvestStandardTimesComponent', () => {
  let component: HarvestPostHarvestStandardTimesComponent;
  let fixture: ComponentFixture<HarvestPostHarvestStandardTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestPostHarvestStandardTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestPostHarvestStandardTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
