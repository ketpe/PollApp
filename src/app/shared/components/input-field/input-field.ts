import { Component, computed, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputFieldVariant, Labeltext } from '../../models/types';
import { DeleteButton } from '../delete-button/delete-button';
import { VALIDATOR_MESSAGE } from '../../models/validator-messages';

@Component({
  imports: [ReactiveFormsModule, DeleteButton],
  selector: 'app-input-field',
  styleUrl: './input-field.scss',
  templateUrl: './input-field.html',
})
export class InputField {
  labelname = input<string>("");
  labeltext = input<string>("");
  placeholder = input<string>("");
  hasTrash = input<boolean>(false);
  inputFieldVariant = input<InputFieldVariant>("noLabel");
  control = input<FormControl>(new FormControl(''));

  private touchTrigger = signal(0);

  onDateSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      const dateString = inputElement.value;
      const [year, month, day] = dateString.split("-");
      const newDate = `${day}.${month}.${year}`;
      this.control().setValue(newDate);
      this.control().markAsDirty();
      this.control().markAsTouched();
      this.touchTrigger.update(v => v + 1);
    }
  }

  onBlur() {
    this.control().markAsTouched();
    this.touchTrigger.update(v => v + 1);
  }

  onInput() {
    this.control().markAsDirty();
    this.touchTrigger.update(v => v + 1);
  }


  errorMessage = computed(() => {
    this.touchTrigger();

    const ctrl = this.control();
    const error = ctrl.errors;

    if (!error) return '';
    if (!ctrl.touched && !ctrl.dirty) return '';

    const errorKey = Object.keys(error)[0] as keyof typeof VALIDATOR_MESSAGE;
    return VALIDATOR_MESSAGE[errorKey] || errorKey;
  });

  clearInput() {
    this.control().setValue('');
    this.control().markAsPristine();
    this.control().markAsUntouched();
    this.touchTrigger.set(0);
  }
}
