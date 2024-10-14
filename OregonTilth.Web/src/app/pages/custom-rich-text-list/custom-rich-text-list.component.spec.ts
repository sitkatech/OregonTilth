import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRichTextListComponent } from './custom-rich-text-list.component';

describe('CustomRichTextListComponent', () => {
  let component: CustomRichTextListComponent;
  let fixture: ComponentFixture<CustomRichTextListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRichTextListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRichTextListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
