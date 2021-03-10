import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropUnitsComponent } from './crop-units.component';

describe('CropUnitsComponent', () => {
  let component: CropUnitsComponent;
  let fixture: ComponentFixture<CropUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
