import { Component, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Server } from "src/app/models/server.model";
import { ServerService } from "src/app/services/server.service";

@Component({
	selector: 'app-delete-server',
	templateUrl: './delete-server.component.html'
})
export class DeleteServerComponent {

	serverName: string;

	constructor(@Inject(MAT_DIALOG_DATA) public server: Server, private _dialogRef: MatDialogRef<DeleteServerComponent>, private _serverService: ServerService, private _snackBar: MatSnackBar) { }

	delete() {
		if (this.serverName != this.server.friendlyName)
		{
			this._snackBar.open('The server name you entered is incorrect.', 'OK', {
				duration: 10000,
			});

			return;
		}

		this._serverService.deleteServer(this.server.id).subscribe(success => {
			this._dialogRef.close();
			this._snackBar.open('Server removed successfully.', 'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('An error occured removing the server.', 'OK', {
				duration: 10000,
			});
		});
	}

	cancel() {
		this._dialogRef.close();
	}
}