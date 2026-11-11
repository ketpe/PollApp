import { Component, inject, signal } from '@angular/core';
import { Surveys } from '../../services/surveys';
import { Category } from '../../models/category.interface';

@Component({
  imports: [],
  selector: 'app-drop-down-menu',
  styleUrl: './drop-down-menu.scss',
  templateUrl: './drop-down-menu.html',
})
export class DropDownMenu {
  surveysService = inject(Surveys);

  currentStatus = 'normal';
  selectedCategory = signal<Category | "All Surveys">('All Surveys');
  isCategoryShow = signal<boolean>(false);

  /**
   * specifies the path based on the status
   * @param status
   * @returns path of the Arrow Icon
   */
  getArrowPathByState(status: string): string {
    if (this.isCategoryShow()) {
      return '/icons/arrow_drop_down-yellow-top.svg';
    } else {
      switch (status) {
        case 'hover':
          return '/icons/arrow_drop_down-yellow.svg';
        case 'active':
          return '/icons/arrow_drop_down-yellow-top.svg';
        default:
          return '/icons/arrow_drop_down.svg';
      }
    }
  }

  toggleDropDown() {
    this.isCategoryShow.update(value => !value);
  }

  selectCategory(category: Category | "All Surveys") {
    this.selectedCategory.set(category)
    this.isCategoryShow.set(false);

  }

  get selectedCategoryObj(): Category | null {
    const current = this.selectedCategory();
    return typeof current === 'object' ? current : null;
  }
}


