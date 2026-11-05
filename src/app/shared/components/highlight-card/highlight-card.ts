import { Component, input } from '@angular/core';
import { SurveyState } from '../survey-state/survey-state';

@Component({
  imports: [SurveyState],
  selector: 'app-highlight-card',
  styleUrl: './highlight-card.scss',
  templateUrl: './highlight-card.html',
})
export class HighlightCard {
  source = input<string>('highlight');
  get cardPrefix() {
    return this.source() === 'highlight' ? 'highlight_card' : 'survey_card';
  }
}
