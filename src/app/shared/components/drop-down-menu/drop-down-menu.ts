import { Component, signal } from '@angular/core';
import { Categories, CATEGORIES } from '../../models/categories.model';

@Component({
  imports: [],
  selector: 'app-drop-down-menu',
  styleUrl: './drop-down-menu.scss',
  templateUrl: './drop-down-menu.html',
})
export class DropDownMenu {
  currentStatus = 'normal';

  categoriesList = CATEGORIES;
  selectedCategory = signal<Categories>('All Surveys');
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

  selectCategory(selectCategory: Categories) {
    this.selectedCategory.set(selectCategory)
    this.isShow.set(false);

  }
}

