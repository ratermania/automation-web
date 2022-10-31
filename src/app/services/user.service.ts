import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Login } from "../models/login.model";
import { PasswordChange } from "../models/password-change.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this._http.get<User[]>(`${environment.identityUrl}/users/`);
    }

    getUserFromToken(): BehaviorSubject<User> {
        if (!this._user.value?.username) {
            const token: string = sessionStorage.getItem('token');
            this.setUserFromToken(token);
        }

        return this._user;
    }

    login(userLogin: Login): Observable<any> {
        return this._http.post(`${environment.identityUrl}/users/login`, userLogin).pipe(
            map((data: any) => {
                sessionStorage.setItem('token', data.token);
                this.setUserFromToken(data.token);
            })
        );
    }

    logout() {
        sessionStorage.clear();
        this._user.next(new User());
    }

    changePassword(passwordChange: PasswordChange): Observable<any> {
        return this._http.put(`${environment.identityUrl}/users/password`, passwordChange);
    }

    update(user: User) {
        return this._http.put(`${environment.identityUrl}/users`, user);
    }

    private setUserFromToken(token: string) {
        if (!token) {
            return;
        }

        const base64User: string = token.split('.')[1]
            .replace('-', '+')
            .replace('_', '/');

        const user: User = JSON.parse(atob(base64User));

        this._user.next(user);
    }
}