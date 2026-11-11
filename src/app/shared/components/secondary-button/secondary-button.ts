import { Component, computed, signal, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-secondary-button',
  styleUrl: './secondary-button.scss',
  templateUrl: './secondary-button.html',
})
export class SecondaryButton {

  textforBtn = input<string>("add option")
  btnClick = output<void>();

  btnText = computed(() => {
    if (this.textforBtn() === "cancel") {
      return "Cancel"
    } else {
      return "";
    }
  });

  imgSrc = computed(() => {
    if (this.textforBtn() === "cancel") {
      return "/icons/close_Icon.svg"
    } else {
      return "";
    }

  });
}
