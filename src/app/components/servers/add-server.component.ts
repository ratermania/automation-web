import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Server } from "src/app/models/server.model";
import { ServerService } from "src/app/services/server.service";

@Component({
	selector: 'app-add-server',
	templateUrl: './add-server.component.html'
})
export class AddServerComponent {

	server: Server = new Server();

	constructor(private _serverService: ServerService, private _snackBar: MatSnackBar, private _dialogRef: MatDialogRef<AddServerComponent>) { }

	save() {
		this._serverService.addServer(this.server).subscribe(success => {
			this._dialogRef.close();
			this._snackBar.open('Server added successfully.', 'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('An error occured adding the server.', 'OK', {
				duration: 10000,
			});
		});
	}

	cancel() {
		this._dialogRef.close();
	}
}