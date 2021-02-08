import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "../components/login/login.component";
import { UserService } from "./user.service";

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private _userService: UserService, private _dialog: MatDialog) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if (sessionStorage.getItem('token') == null) {
			this._dialog.open(LoginComponent, {
				disableClose: true
			});
			  
			return false;
		}

		return true;
	}
}