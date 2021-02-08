import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { Job } from "src/app/models/job.model";
import { ServerService } from "src/app/services/server.service";
import { JobsService } from "src/app/services/jobs.service";
import { DeleteServerComponent } from "./delete-server.component";
import { Server } from "src/app/models/server.model";

@Component({
	selector: 'app-edit-server',
	templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit {

	@Input() server: Server;
	automationOptions: AutomationOptions = new AutomationOptions();

	constructor(private _serverService: ServerService, private _snackBar: MatSnackBar, private _matDialog: MatDialog) { }

	ngOnInit() {
		this._serverService.getOptions(this.server.url).subscribe(options => {
			this.automationOptions = options;
		});
	}

	delete() {
		this._matDialog.open(DeleteServerComponent, {
			data: this.server
		});
	}

	save() {
		this._serverService.saveOptions(this.automationOptions).subscribe(success => {
			this._snackBar.open('Automation options saved successfully.',  'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('An error occurred while saving automation options.', 'OK', {
				duration: 10000,
			});
		});
	}
}