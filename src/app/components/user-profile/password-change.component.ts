import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PasswordChange } from "src/app/models/password-change.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: 'app-password-change',
	templateUrl: './password-change.component.html',
})
export class PasswordChangeComponent {
	passwordChange: PasswordChange = new PasswordChange();

	constructor(private _userService: UserService, private _snackBar: MatSnackBar, private _dialogRef: MatDialogRef<PasswordChangeComponent>) { }

	save() {
		this._userService.changePassword(this.passwordChange).subscribe(success => {
			this._dialogRef.close();
			this._snackBar.open('Password changed successfully', 'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('Your password could not be changed', 'OK', {
				duration: 10000,
			});
		});	
	}

	cancel() {
		this._dialogRef.close();
	}
}
