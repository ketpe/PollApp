import { Component, inject, signal, ViewChild } from '@angular/core';
import { HomeHeader } from '../../layout/components/home-header/home-header';
import { PrimaryButton } from '../../shared/components/primary-button/primary-button';
import { HighlightCard } from '../../shared/components/highlight-card/highlight-card';
import { FilterButton } from '../../shared/components/filter-button/filter-button';
import { DropDownMenu } from '../../shared/components/drop-down-menu/drop-down-menu';
import { Surveys } from '../../shared/services/surveys';
import { NewSurveyDialog } from '../../shared/components/new-survey-dialog/new-survey-dialog';


@Component({
  imports: [HomeHeader, PrimaryButton, HighlightCard, FilterButton, DropDownMenu, NewSurveyDialog],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  surveyService = inject(Surveys);
  @ViewChild('surveyDialogComp') surveyDialog!: NewSurveyDialog;

  async ngOnInit() {
    await this.surveyService.loadCategories();
  }

  openNewSurveyDialog() {
    this.surveyDialog.open();
  }

}
