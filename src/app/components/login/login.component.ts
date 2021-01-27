import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent {

	user: User = new User();

	constructor(private _userService: UserService, private _snackBar: MatSnackBar, private _router: Router, private _dialogRef: MatDialogRef<LoginComponent>) { }

	login() {
		this._userService.login(this.user).subscribe(success => {
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
