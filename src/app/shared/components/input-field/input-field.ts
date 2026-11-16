import { Component, computed, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, } from '@angular/forms';
import { InputFieldVariant } from '../../models/types';
import { DeleteButton } from '../delete-button/delete-button';
import { VALIDATOR_MESSAGE } from '../../models/validator-messages';

@Component({
  imports: [ReactiveFormsModule, DeleteButton,],
  selector: 'app-input-field',
  styleUrl: './input-field.scss',
  templateUrl: './input-field.html',
})
export class InputField {
  labelname = input<string>("");
  labeltext = input<string>("");
  hasTrash = input<boolean>(false);
  inputFieldVariant = input<InputFieldVariant>("noLabel")
  control = input<FormControl>(new FormControl(''));

  onDateSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      const dateString = inputElement.value;
      const [year, month, day] = dateString.split("-");
      const newDate = `${day}.${month}.${year}`;
      this.control().setValue(newDate);
    }
  }

  errorMessage = computed(() => {
    const error = this.control().errors;
    if (!error) return '';
    const errorKey = Object.keys(error)[0] as keyof typeof VALIDATOR_MESSAGE;
    return VALIDATOR_MESSAGE[errorKey] || errorKey;
  });
}
