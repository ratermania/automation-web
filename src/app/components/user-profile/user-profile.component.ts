import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { PasswordChangeComponent } from "./password-change.component";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

	user: User;

	constructor(private _userService: UserService, private _dialog: MatDialog, private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this.user = { ...this._userService.getUserFromToken().value };
	}

	changePassword() {
		this._dialog.open(PasswordChangeComponent);
	}

	save() {
		this._userService.update(this.user).subscribe(() => {
			this._snackBar.open('User profile saved successfully.', 'OK', {
				duration: 10000,
			});
		})
	}
}