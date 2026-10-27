import { Component } from '@angular/core';
import { HomeHeader } from '../../layout/components/home-header/home-header';

@Component({
  imports: [HomeHeader],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home { }
