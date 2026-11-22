import { Component, ViewChild, ElementRef, input, output, effect, afterNextRender, inject } from '@angular/core';
import { SurveyState } from '../survey-state/survey-state';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { FormBuilder, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../input-field/input-field';
import { DropDownMenu } from '../drop-down-menu/drop-down-menu';
import { dateValidator } from '../../validators/validators';
import { INPUT_LABEL_TEXT } from '../../models/input-label-text';
import { Checkbox } from '../checkbox/checkbox';
import { Button } from '../button/button';

@Component({
  imports: [SurveyState, SecondaryButton, ReactiveFormsModule, InputField, DropDownMenu, Checkbox, Button],
  selector: 'app-new-survey-dialog',
  styleUrl: './new-survey-dialog.scss',
  templateUrl: './new-survey-dialog.html',
})
export class NewSurveyDialog {

  @ViewChild('newSurveyDialog') dialogRef!: ElementRef<HTMLDialogElement>;
  closeDialog = output<void>();
  labelText = INPUT_LABEL_TEXT;
  private fBuilder = inject(FormBuilder);


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

  serveyForm = this.fBuilder.group({
    surveyName: ['', [Validators.required, Validators.minLength(4)]],
    surveyDescription: ['',],
    surveyEndDate: ['', dateValidator],
    questions: this.fBuilder.array([this.createQuestionGroup()])

  })

  createQuestionGroup() {
    return this.fBuilder.group({
      question: ['', Validators.required],
      multiAnswer: [false],
      answers: this.fBuilder.array([this.createAnswer(), this.createAnswer()])
    })
  }
  addQuestion() {
    this.createQuestionGroup();
  }

  createAnswer() {
    return this.fBuilder.control("")
  }

  get surveysControls() {
    return this.serveyForm.controls
  }

  getQuestionControls() {
    return (this.serveyForm.get('questions') as FormArray).controls;
  }

  getAnswerControls(questionIndex: number) {

    const questionsArray = this.serveyForm.get('questions') as FormArray;

    const specificQuestion = questionsArray.at(questionIndex) as FormGroup;

    return (specificQuestion.get('answers') as FormArray).controls;
  }
  getAlphabeticalLetterForLabel(answerIndex: number) {
    return String.fromCharCode(65 + answerIndex) + '.';

  }
}

