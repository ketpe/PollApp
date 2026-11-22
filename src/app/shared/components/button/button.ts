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
  btnConfig = computed(() => {
    return BTN_VARIANT[this.btnVariant()];
  });


}

const BTN_VARIANT = {
  primary_new_servey: {
    class: 'primary',
    imagePath: '/images/add_circle.svg'
  },
  secondary_cancel: {
    class: 'secondary',
    imagePath: '/icons/close_Icon.svg'
  },
  secondary_add: {
    class: 'secondary',
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