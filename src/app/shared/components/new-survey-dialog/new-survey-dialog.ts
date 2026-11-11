import { Component, ViewChild, ElementRef, input, output, effect, afterNextRender } from '@angular/core';
import { SurveyState } from '../survey-state/survey-state';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputfieldVariant } from '../../models/types';
import { InputField } from '../input-field/input-field';

@Component({
  imports: [SurveyState, SecondaryButton, ReactiveFormsModule, InputField],
  selector: 'app-new-survey-dialog',
  styleUrl: './new-survey-dialog.scss',
  templateUrl: './new-survey-dialog.html',
})
export class NewSurveyDialog {

  @ViewChild('newSurveyDialog') dialogRef!: ElementRef<HTMLDialogElement>;
  closeDialog = output<void>();


  open() {
    this.dialogRef.nativeElement.showModal();
  }

  close() {
    this.dialogRef.nativeElement.close();
    this.closeDialog.emit();
  }

  onClose() {
    this.closeDialog.emit();
  }

  serveyForm = new FormGroup({
    surveyName: new FormControl(""),
    surveyDescription: new FormControl(""),

  })
}

