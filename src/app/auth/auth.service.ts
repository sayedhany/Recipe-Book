import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user/user.module';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
export interface authResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<User>(null!);
  token: string = null!;
  constructor(private http: HttpClient, private router: Router) {}
  signup(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKu-Lg2YvmGETm5cYoCtrmVB7NXTmOqNg',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((resData) =>
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        )
      );
  }
  signIn(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKu-Lg2YvmGETm5cYoCtrmVB7NXTmOqNg',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((resData) =>
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        )
      );
  }
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDae = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDae);
    this.user.next(user);
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
  logOut() {
    this.user.next(null!);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }
  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogOut(expirationDuration);
      this.user.next(loadedUser);
    }
  }
  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(
      () => this.logOut(),
      expirationDuration
    );
  }
  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password..';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this email not found.';
    }
    return throwError(errorMessage);
  }
}
