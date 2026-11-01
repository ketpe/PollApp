import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-drop-down-menu',
  styleUrl: './drop-down-menu.scss',
  templateUrl: './drop-down-menu.html',
})
export class DropDownMenu {
  currentStatus = 'normal';
  categoriesList = ["All Surveys", "Team Activities", "Health & Wellness", "Gaming & Entertainment", "Eductaion & Learning", "Lifsyle & Preferences", "Technology & Innovation"]

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

  }
}

