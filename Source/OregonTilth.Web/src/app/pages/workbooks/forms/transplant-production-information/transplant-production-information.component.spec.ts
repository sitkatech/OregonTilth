import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransplantProductionInformationComponent } from './transplant-production-information.component';

describe('TransplantProductionInformationComponent', () => {
  let component: TransplantProductionInformationComponent;
  let fixture: ComponentFixture<TransplantProductionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransplantProductionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransplantProductionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
