import { Component, ViewChild, ElementRef, input, output, effect, afterNextRender } from '@angular/core';
import { SurveyState } from '../survey-state/survey-state';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../input-field/input-field';
import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { dateValidator } from '../../validators/validators';
import { INPUT_LABEL_TEXT } from '../../models/input-label-text';

@Component({
  imports: [SurveyState, SecondaryButton, ReactiveFormsModule, InputField, DropDownMenu],
  selector: 'app-new-survey-dialog',
  styleUrl: './new-survey-dialog.scss',
  templateUrl: './new-survey-dialog.html',
})
export class NewSurveyDialog {

  @ViewChild('newSurveyDialog') dialogRef!: ElementRef<HTMLDialogElement>;
  closeDialog = output<void>();

  labelText = INPUT_LABEL_TEXT;


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
    surveyName: new FormControl("",
      [Validators.required, Validators.minLength(4)]
    ),
    surveyDescription: new FormControl(""),
    surveyEndDate: new FormControl("",
      [dateValidator,]
    ),

  })
}

