import { Injectable } from "@angular/core";
import {
	HttpEvent, HttpInterceptor, HttpHandler,
	HttpRequest, HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";
import { UserService } from "../services/user.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private _userService: UserService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (!request.headers.has('Content-Type')) {
			request = request.clone({
				headers: request.headers.set('Content-Type', 'application/json')
			});
		}

		request = this.addAuthenticationToken(request);

		return next.handle(request);
	}

	private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {

		const user = this._userService.getUser().value;

		if (user != null) {
			const credentials: string = btoa(`${user.username}:${user.password}`);

			return request.clone({
				headers: request.headers.set("Authorization", `Basic ${credentials}`)
			});
		}

		return request;
	}
}