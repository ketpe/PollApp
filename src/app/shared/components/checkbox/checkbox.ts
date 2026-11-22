import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-checkbox',
  styleUrl: './checkbox.scss',
  templateUrl: './checkbox.html',
})
export class Checkbox {
  labelname = input<string>("");
  labeltext = input<string>("");
  control = input<FormControl>(new FormControl(false));
}
