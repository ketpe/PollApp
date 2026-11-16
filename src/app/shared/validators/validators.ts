import { AbstractControl, ValidationErrors, } from '@angular/forms';

export function dateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }

    const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[12])\.\d{4}$/;
    if (!regex.test(value)) {
        return { invalidDate: 'Bitte gib ein gültiges Datum im Format TT.MM.JJJJ ein.' };
    }

    return null;
}