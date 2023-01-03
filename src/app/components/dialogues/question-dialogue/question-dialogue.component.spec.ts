import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDialogueComponent } from './question-dialogue.component';

describe('QuestionDialogueComponent', () => {
  let component: QuestionDialogueComponent;
  let fixture: ComponentFixture<QuestionDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
