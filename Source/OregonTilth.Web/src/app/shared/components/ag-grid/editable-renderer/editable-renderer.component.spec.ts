import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditableRendererComponent } from './editable-renderer.component';


describe('EditableRendererComponent', () => {
  let component: EditableRendererComponent;
  let fixture: ComponentFixture<EditableRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
