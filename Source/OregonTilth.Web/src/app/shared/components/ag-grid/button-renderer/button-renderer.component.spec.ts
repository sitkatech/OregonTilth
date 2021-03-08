import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRendererComponent } from './button-renderer.component';

describe('LandOwnerRendererComponent', () => {
  let component: ButtonRendererComponent;
  let fixture: ComponentFixture<ButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRendereButtonRendererComponentrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
