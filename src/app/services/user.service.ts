import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

	constructor(private _http: HttpClient) { }

	getUser(): BehaviorSubject<User> {
		let sessionUser: string = sessionStorage.getItem('user');

		if (this._user.value == null && sessionUser != null)
		{
			let user: User = JSON.parse(atob(sessionUser));

			this._user.next(user);
		}

		return this._user;
	}

	login(user: User): Observable<any> {
		this._user.next(user);

		return this._http.post('http://localhost:61616/users/login', null).pipe(
			map(() => {
				sessionStorage.setItem('user', btoa(JSON.stringify(user)));
			}
		));
	}

	logout() {
		sessionStorage.clear();

		this._user.next(new User());
	}
}