import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Job } from "src/app/models/job.model";
import { JobsService } from "src/app/services/jobs.service";

@Component({
	selector: 'app-edit-job',
	templateUrl: './edit-job.component.html'
})
export class EditJobComponent {

	constructor(@Inject(MAT_DIALOG_DATA) public job: Job, private _jobsService: JobsService, private _snackBar: MatSnackBar, private _dialogRef: MatDialogRef<EditJobComponent>) { }

	save() {
		this._jobsService.save(this.job).subscribe(success => {
			this._snackBar.dismiss();
			this._dialogRef.close();
			this._snackBar.open('Job saved successfully.',  'OK', {
				duration: 10000,
			});
		}, error => {
			this._snackBar.open('An error occurred while saving the job.  There may be more details in the Automation Server section', 'OK', {
				duration: 10000,
			});
		});
	}

	cancel() {
		this._dialogRef.close();
	}
}