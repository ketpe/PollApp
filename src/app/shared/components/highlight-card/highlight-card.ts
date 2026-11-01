import { Component } from '@angular/core';
import { SurveyState } from '../survey-state/survey-state';

@Component({
  imports: [SurveyState],
  selector: 'app-highlight-card',
  styleUrl: './highlight-card.scss',
  templateUrl: './highlight-card.html',
})
export class HighlightCard { }
