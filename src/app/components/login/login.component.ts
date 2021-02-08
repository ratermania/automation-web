import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Login } from "src/app/models/login.model";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent {

	userLogin: Login = new Login();

	constructor(private _userService: UserService, private _snackBar: MatSnackBar, private _router: Router, private _dialogRef: MatDialogRef<LoginComponent>) { }

	login() {
		this._userService.login(this.userLogin).subscribe(success => {
			this._snackBar.dismiss();
			this._dialogRef.close();
			this._router.navigate(['/']);
		}, error => { 
			this._snackBar.open('Invalid username or password.', 'OK', {
				duration: 10000,
			});
		});
	}
}
