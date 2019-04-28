import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  loggerIn = false;

  constructor() {}

  login(user: User): boolean {
    const { userName, password } = user;

    if (userName === 'admin' && password === '123') {
      this.loggerIn = true;
      localStorage.setItem('isLogged', userName);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggerIn;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggerIn = false;
  }
}
