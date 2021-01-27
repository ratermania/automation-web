import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Job } from "src/app/models/job.model";
import { JobsService } from "src/app/services/jobs.service";
import { EditJobComponent } from "./edit-job.component";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class JobsComponent implements OnInit {

	columns: string[] = ['name', 'status', 'actions'];
	dataSource: Observable<Job[]>;
	jobDetail: Job | null;

	constructor(private _jobsService: JobsService, private _dialog: MatDialog) { }

	ngOnInit() {
		this.getJobs()
	}

	getJobs() {
		this.dataSource = this._jobsService.get();
	}

	runJob(event: Event, id: number) {
		event.stopPropagation();

		this._jobsService.run(id).subscribe(() => {
			setTimeout(() => {
				this.getJobs();
			}, 100);
		});
	}

	editJob(event: Event, job: Job) {
		event.stopPropagation();

		this._dialog.open(EditJobComponent, {
			data: { ...job }
		});
	}
}