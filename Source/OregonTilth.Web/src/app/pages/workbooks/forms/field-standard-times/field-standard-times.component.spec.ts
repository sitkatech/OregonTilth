import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldStandardTimesComponent } from './field-standard-times.component';

describe('FieldStandardTimesComponent', () => {
  let component: FieldStandardTimesComponent;
  let fixture: ComponentFixture<FieldStandardTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldStandardTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldStandardTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
