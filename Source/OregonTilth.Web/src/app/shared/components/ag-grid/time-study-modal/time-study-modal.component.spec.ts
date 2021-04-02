import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStudyModal } from './time-study-modal.component';

describe('TimeStudyModal', () => {
  let component: TimeStudyModal;
  let fixture: ComponentFixture<TimeStudyModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeStudyModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStudyModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
