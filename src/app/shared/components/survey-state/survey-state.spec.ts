import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyState } from './survey-state';

describe('SurveyState', () => {
  let component: SurveyState;
  let fixture: ComponentFixture<SurveyState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyState],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
