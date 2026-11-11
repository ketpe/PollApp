import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-survey-state',
  styleUrl: './survey-state.scss',
  templateUrl: './survey-state.html',
})
export class SurveyState {

  background = input<'default' | 'inverted'>('default');
  purpose = input<'time remain' | 'state'>('state');
  surveyState = input<'puplished' | 'draft'>('puplished');


  displayText = computed(() => {
    if (this.purpose() === "time remain") {
      return "Ends in 1 Day";
    } else {
      if (this.surveyState() === "draft") {
        return "Draft";
      } else {
        return "Puplished";
      }
    }
  })

}
