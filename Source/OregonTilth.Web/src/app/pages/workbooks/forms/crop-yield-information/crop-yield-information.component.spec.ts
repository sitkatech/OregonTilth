import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropYieldInformationComponent } from './crop-yield-information.component';

describe('CropYieldInformationComponent', () => {
  let component: CropYieldInformationComponent;
  let fixture: ComponentFixture<CropYieldInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropYieldInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropYieldInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
