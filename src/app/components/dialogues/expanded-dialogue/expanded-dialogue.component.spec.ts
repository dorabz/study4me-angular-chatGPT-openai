import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedDialogueComponent } from './expanded-dialogue.component';

describe('ExpandedDialogueComponent', () => {
  let component: ExpandedDialogueComponent;
  let fixture: ComponentFixture<ExpandedDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
