import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStudyCellRendererComponent } from './time-study-cell-renderer.component';

describe('TimeStudyCellRendererComponent', () => {
  let component: TimeStudyCellRendererComponent;
  let fixture: ComponentFixture<TimeStudyCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeStudyCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStudyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
