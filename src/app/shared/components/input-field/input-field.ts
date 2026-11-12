import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputFieldVariant } from '../../models/types';
import { DeleteButton } from '../delete-button/delete-button';

@Component({
  imports: [ReactiveFormsModule, DeleteButton],
  selector: 'app-input-field',
  styleUrl: './input-field.scss',
  templateUrl: './input-field.html',
})
export class InputField {

  label = input<string>("");
  hasTrash = input<boolean>(false);
  inputFieldVariant = input<InputFieldVariant>("noLabel")

  control = input<FormControl>(new FormControl(''));
}
