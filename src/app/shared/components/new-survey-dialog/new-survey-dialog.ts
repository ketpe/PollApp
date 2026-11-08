import { Component, ViewChild, ElementRef, input, output, effect } from '@angular/core';

@Component({
  imports: [],
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

}

