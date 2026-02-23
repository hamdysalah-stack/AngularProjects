import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userData } from './user';

@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.html',
  styleUrl: './tdf.scss',
})
export class Tdf {
  // OnSubmit(registerForm: HTMLFormElement) {
  //   console.log('From Sumbiited');
  //   console.log('From Sumbiited', registerForm);
  // }
  defaultQuestion: string = 'doctor';
  answer: string = '';
  genders = ['male', 'female'];
  user = { userame: '', email: '', secretQuestion: '', answer: '', gender: '' };
  userDataobj = new userData('', '', '', '', '');
  isSumbitted: boolean = false;
  @ViewChild('registerForm', { static: true }) signupform: NgForm;
  OnSubmit(registerForm: NgForm) {
    this.isSumbitted = true;
    // console.log('From Sumbiited');
    // console.log('From Sumbiited', registerForm);
    console.log(this.signupform);
    console.log('deafult is', this.defaultQuestion);
    this.userDataobj.username = this.signupform.value.userData.userame;
    this.userDataobj.email = this.signupform.value.userData.email;
    this.userDataobj.secret = this.signupform.value.secret;
    this.userDataobj.answer = this.signupform.value.QuestionAnswer;
    this.userDataobj.gernder = this.signupform.value.gender;
    this.signupform.reset();
  }
  SuggestUsername() {
    const SuggestedName = 'hamdy salah';
    // this.signupform.setValue({

    // })
    //if i user set value must put each value in form so i will user patchValue

    this.signupform.form.patchValue({
      userData: {
        username: SuggestedName,
      },
    });
  }
}
