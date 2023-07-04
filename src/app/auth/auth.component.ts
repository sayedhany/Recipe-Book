import { AuthService, authResponseData } from './auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLogInMode = true;
  isLoading = false;
  error: string = '';
  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
  }
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(authForm: NgForm) {
    console.log(authForm);
    if (!authForm.valid) {
      return;
    }
    let authObs: Observable<authResponseData>;
    this.isLoading = true;
    console.log(this.isLoading);

    if (this.isLogInMode) {
      //...
      authObs = this.authService.signIn(
        authForm.value.email,
        authForm.value.password
      );
    } else {
      authObs = this.authService.signup(
        authForm.value.email,
        authForm.value.password
      );
    }
    authObs.subscribe(
      (response) => {
        console.log(response, 'signin');
        this.isLoading = false;
        this.error = '';
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
        console.log(errorMessage);
      }
    );
    authForm.reset();
  }
}
