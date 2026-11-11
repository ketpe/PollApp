import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputfieldVariant } from '../../models/types';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-input-field',
  styleUrl: './input-field.scss',
  templateUrl: './input-field.html',
})
export class InputField {

  label = input<string>("");
  hasTrash = input<boolean>(false);
  inputfieldvariant = input<InputfieldVariant>("noLabel")

  control = input<FormControl>(new FormControl(''));
}
