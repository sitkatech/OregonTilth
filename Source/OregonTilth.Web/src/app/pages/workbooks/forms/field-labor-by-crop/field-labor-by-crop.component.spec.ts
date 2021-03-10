import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLaborByCropComponent } from './field-labor-by-crop.component';

describe('FieldLaborByCropComponent', () => {
  let component: FieldLaborByCropComponent;
  let fixture: ComponentFixture<FieldLaborByCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLaborByCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLaborByCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
