import { Component, signal } from '@angular/core';
import { CategoryNames } from '../../models/survey.models.';
import { Surveys } from '../../services/surveys';

@Component({
  imports: [],
  selector: 'app-drop-down-menu',
  styleUrl: './drop-down-menu.scss',
  templateUrl: './drop-down-menu.html',
})
export class DropDownMenu {

  currentStatus = 'normal';

  categoriesList: CategoryNames[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation'
  ];
  selectedCategory = signal<CategoryNames>('All Surveys');
  isShow = signal<boolean>(false);

  getImagePath(status: string): string {
    switch (status) {
      case 'hover':
        return '/icons/arrow_drop_down-yellow.svg';
      case 'active':
        return '/icons/arrow_drop_down-yellow-top.svg';
      default:
        return '/icons/arrow_drop_down.svg';
    }
  }
  toggleDropDown() {
    this.isShow.update(value => !value);
  }

  selectCategory(selectCategory: CategoryNames) {
    this.selectedCategory.set(selectCategory)
    this.isShow.set(false);

  }
}


