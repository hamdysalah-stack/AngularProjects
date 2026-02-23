import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-component',
  standalone: false,
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.scss',
})
export class AuthComponent {
  error: any = null;
  OnRaiseError() {
    this.error = 'An error occured in TypeScript';
  }

  OnhandleError() {
    this.error = null;
  }

  //Dynamic comp

  // private ShowErrorAlert(){

  // }
}
