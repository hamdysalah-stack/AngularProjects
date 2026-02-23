import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../Validations/Username.validator';
import { ConfirmPasswordValidtor } from '../Validations/ConfirmPassword.validator';

@Component({
  selector: 'app-reactive-froms',
  standalone: false,
  templateUrl: './reactive-froms.html',
  styleUrl: './reactive-froms.scss',
})
export class ReactiveFroms implements OnInit {
  RegisterationForm!: FormGroup;
  forbiddenNamee: RegExp = /admin/;

  constructor(private _Fb: FormBuilder) {}

  //simple validation  ]]> biliding in ractive forms
  //coustome validation
  //cross-filed validatio
  //dynamic validation

  // ngOnInit(): void {
  //   this.RegisterationForm = this._Fb.group({
  //     userName: this._Fb.control(''),
  //     Password: this._Fb.control(''),
  //     ConfirmPassword: this._Fb.control(''),
  //     address: this._Fb.group({
  //       State: this._Fb.control(''),
  //       City: this._Fb.control(''),
  //       PostalCode: this._Fb.control(''),
  //     }),
  //   });
  // }

  // RegisterationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   Password: new FormControl(''),
  //   ConfirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     State: new FormControl(''),
  //     City: new FormControl(''),
  //     PostalCode: new FormControl(''),
  //   }),
  // });

  ngOnInit(): void {
    this.RegisterationForm = this._Fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            forbiddenNameValidator(this.forbiddenNamee),
          ],
        ],
        Password: ['', [Validators.required, Validators.minLength(5)]],
        ConfirmPassword: [''],
        email: [''],
        subscribe: [false],
        AlterantiveEmail: this._Fb.array([]),
        address: this._Fb.group({
          State: [''],
          City: [''],
          PostalCode: [''],
        }),
      },
      { validators: [ConfirmPasswordValidtor] },
    );

    this.RegisterationForm.reset();
  }

  get GetUserName() {
    return this.RegisterationForm.get('userName');
  }
  get getPassword() {
    return this.RegisterationForm.get('Password');
  }
  get AlterantiveEmail() {
    return this.RegisterationForm.get('AlterantiveEmail') as FormArray;
  }
  getControl(controlName: string) {
    return this.RegisterationForm.get(controlName);
  }
  OnLoadData() {
    this.RegisterationForm.patchValue({
      userName: 'Hamdy Salah',
      address: {
        State: 'mansoura',
        City: 'mitghamer',
        PostalCode: '123454',
      },
    });
    // OnLoadData() {
    //   this.RegisterationForm.setValue({
    //     userName: 'Hamdy Salah',
    //     Password: '123',
    //     ConfirmPassword: '123',
    //     address: {
    //       State: 'mansoura',
    //       City: 'mitghamer',
    //       PostalCode: '123454',
    //     },
    //   });
  }
  OnsetEmailValidation() {
    this.RegisterationForm.get('subscribe')?.valueChanges.subscribe((checkedvalue) => {
      const email = this.RegisterationForm.get('email');
      if (checkedvalue) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }

  OnAddEmail() {
    //add new email to from control
    this.AlterantiveEmail.push(this._Fb.control(''));
  }
  clearlastEmail(index: number) {
    this.AlterantiveEmail.removeAt(index);
  }
}
