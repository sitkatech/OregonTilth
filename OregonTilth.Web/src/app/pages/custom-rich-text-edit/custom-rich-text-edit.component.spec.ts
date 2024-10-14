import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRichTextEditComponent } from './custom-rich-text-edit.component';

describe('CustomRichTextEditComponent', () => {
  let component: CustomRichTextEditComponent;
  let fixture: ComponentFixture<CustomRichTextEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRichTextEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRichTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
