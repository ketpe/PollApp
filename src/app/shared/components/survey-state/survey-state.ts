import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-survey-state',
  styleUrl: './survey-state.scss',
  templateUrl: './survey-state.html',
})
export class SurveyState {
  statetext = "Ends in 1 Day";
  background = input<'default' | 'inverted'>('default');

}
