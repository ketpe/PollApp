import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSurveyDialog } from './new-survey-dialog';

describe('NewSurveyDialog', () => {
  let component: NewSurveyDialog;
  let fixture: ComponentFixture<NewSurveyDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSurveyDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NewSurveyDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
