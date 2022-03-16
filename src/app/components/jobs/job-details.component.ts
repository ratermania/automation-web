import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Job } from "src/app/models/job.model";

@Component({
	selector: 'app-job-details',
	templateUrl: './job-details.component.html',
	styleUrls: ['./job-details.component.less']
})
export class JobDetailsComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public job: Job, private _dialogRef: MatDialogRef<JobDetailsComponent>) { }

	close() {
		this._dialogRef.close();
	}
}