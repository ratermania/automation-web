import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { Job } from "src/app/models/job.model";
import { AutomationService } from "src/app/services/automation.service";
import { JobsService } from "src/app/services/jobs.service";

@Component({
	selector: 'app-edit-automation',
	templateUrl: './edit-automation.component.html'
})
export class EditAutomationComponent {

	constructor(@Inject(MAT_DIALOG_DATA) public automationOptions: AutomationOptions, private _automationService: AutomationService, private _snackBar: MatSnackBar, private _dialogRef: MatDialogRef<EditAutomationComponent>) { }

	save() {
		this._automationService.saveOptions(this.automationOptions).subscribe(success => {
			this._snackBar.dismiss();
			this._dialogRef.close();
			this._snackBar.open('Automation options saved successfully.',  'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('An error occurred while saving automation options.  There may be more details in the Automation Server section', 'OK', {
				duration: 10000,
			});
		});
	}

	cancel() {
		this._dialogRef.close();
	}
}