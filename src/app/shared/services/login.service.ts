import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };


@Injectable({
  providedIn: 'root',
})

export class LoginService{
    private readonly api = `${environment.apiUrl}`;

    constructor(
        private http: HttpClient
    ){}


    public auth(params: any): Observable<any> {
        let parameters = {  "userNameOrEmailAddress": params.user,  "password": params.password,  "rememberClient": true}
        return this.http.post(`${this.api}TokenAuth/Authenticate`, parameters, httpOptions);
    }
}