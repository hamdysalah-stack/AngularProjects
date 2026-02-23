import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const forbidden = nameRe.test(control.value);

      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
    // export function forbiddenNmaevalidator(control: AbstractControl) {
    //   const forbdiiden = /admin/.test(control.value);

    //   return forbdiiden ? { forbidenname: { value: control.value } } : null;
    //
  };
}
