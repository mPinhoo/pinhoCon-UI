import { HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';


const ACCESS_TOKEN = 'auth.accessToken';
const USER = 'auth.user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  setToken(token: any){
    window.localStorage.setItem(ACCESS_TOKEN, 'Bearer ' + token.accessToken);
    window.localStorage.setItem(USER, token);
  }

  private static getUser(): any {
    const user = window.localStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public getToken(): string | null {
    return window.localStorage.getItem(ACCESS_TOKEN);
  }

  public isAuthenticated(): boolean {
    const user = TokenStorageService.getUser();
    const token = this.getToken();
    const tokenIsExpired = moment(user.expireInSeconds).isBefore(new Date())
    return !!token && !tokenIsExpired;
  }


public baseHeader(): HttpHeaders {
        const token = this.getToken();
        let headers = new HttpHeaders();
        if (token) {
            headers = headers.set('Authorization', token);
        } else {
            this.isAuthenticated()
        }
        return headers;
    }
}
