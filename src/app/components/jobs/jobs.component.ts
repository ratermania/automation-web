import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Job } from "src/app/models/job.model";
import { Server } from "src/app/models/server.model";
import { JobsService } from "src/app/services/jobs.service";
import { EditJobComponent } from "./edit-job.component";
import { JobDetailsComponent } from "./job-details.component";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.less'],
})
export class JobsComponent implements OnInit {

	@Input() server: Server;
	columns: string[] = ['name', 'actions'];
	dataSource: Observable<Job[]>;
	jobDetail: Job | null;

	constructor(private _jobsService: JobsService, private _dialog: MatDialog, private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this._jobsService.getJobs(this.server.url).toPromise();

		this.dataSource = this._jobsService.jobs;
	}

	runJob(id: number) {
		this._jobsService.run(this.server.url, id).subscribe(() => {
			this._snackBar.open('Job started successfully.', 'OK', {
				duration: 10000,
			});
		});
	}

	viewDetails(job: Job) {
		this._dialog.open(JobDetailsComponent, {
			data: { ...job }
		});
	}

	editJob(job: Job) {
		this._dialog.open(EditJobComponent, {
			data: {
				serverUrl: this.server.url,
				job: { ...job }
			}
		});
	}
}