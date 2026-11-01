import { Component } from '@angular/core';
import { HomeHeader } from '../../layout/components/home-header/home-header';
import { PrimaryButton } from '../../shared/components/primary-button/primary-button';
import { HighlightCard } from '../../shared/components/highlight-card/highlight-card';
import { FilterButton } from '../../shared/components/filter-button/filter-button';
import { DropDownMenu } from '../../shared/components/drop-down-menu/drop-down-menu';


@Component({
  imports: [HomeHeader, PrimaryButton, HighlightCard, FilterButton, DropDownMenu],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home { }
