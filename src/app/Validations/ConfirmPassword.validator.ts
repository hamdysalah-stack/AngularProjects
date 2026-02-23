import { AbstractControl } from '@angular/forms';

export function ConfirmPasswordValidtor(control: AbstractControl) {
  const Password = control.get('Password');
  const ConfirmPassword = control.get('ConfirmPassword');

  //   if (Password?.pristine || ConfirmPassword?.pristine) {
  //     return null;
  //   }
  if (!Password || !ConfirmPassword) return null;
  if (ConfirmPassword.pristine) return null;
  return Password && ConfirmPassword && Password.value != ConfirmPassword.value
    ? {
        mismatch: true,
      }
    : null;
}
