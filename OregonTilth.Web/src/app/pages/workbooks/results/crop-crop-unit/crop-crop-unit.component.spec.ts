import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CropCropUnitComponent } from './crop-crop-unit.component';

describe('CropCropUnitComponent', () => {
  let component: CropCropUnitComponent;
  let fixture: ComponentFixture<CropCropUnitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCropUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCropUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
