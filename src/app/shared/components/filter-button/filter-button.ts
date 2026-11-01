import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-button',
  styleUrl: './filter-button.scss',
  templateUrl: './filter-button.html',
})
export class FilterButton {
  label = input.required<string>();
  btnType = "";
  btnText = "Active survey"
  isActive = input<boolean>();

  ngOnInit() {
    this.setBtnType()
  }

  setBtnType() {
    if (this.label() == "filter-active") {
      this.btnText = "Active survey"
      this.btnType = ""
    } else {
      this.btnText = "Past survey"

    }
  }
}
