import { Component, computed, input, output, signal } from '@angular/core';
import { BtnType } from '../../models/types';


@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
/**
 * Benötigt [btnText] [btnVariant]
 *
 */
export class Button {
  btnText = input<string>("");
  btnVariant = input<BtnType>('primary_new_servey');
  btnClick = output<void>();
  isDisabled = input<boolean>(false);
  btnConfig = computed(() => {
    return BTN_VARIANT[this.btnVariant()];
  });


}

const BTN_VARIANT = {
  primary_new_servey: {
    class: 'primary',
    imagePath: '/images/add_circle.svg'
  },
  secondary_publish: {
    class: 'secondary',
    imagePath: ''
  },
  secondary_cancel: {
    class: 'secondary_dialog',
    imagePath: '/icons/close_Icon.svg'
  },
  secondary_add: {
    class: 'secondary_dialog',
    imagePath: '/icons/add_circle-white.svg'
  },
  tertiary_add: {
    class: 'tertiary',
    imagePath: '/icons/add_circle-white.svg'
  },
  tertiary: {
    class: 'tertiary',
    imagePath: '/images/add_circle.svg'
  },
} as const;