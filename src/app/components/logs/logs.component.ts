import { Component, Input, OnInit } from "@angular/core";
import { Job } from "src/app/models/job.model";
import { Log } from "src/app/models/log.model";
import { LogsService } from "src/app/services/logs.service";

@Component({
	selector: 'app-logs',
	templateUrl: './logs.component.html',
	styleUrls: ['./logs.component.less']
})
export class LogsComponent implements OnInit {
	@Input() job: Job;
	logs: Log[];

	constructor(private _logsService: LogsService) { }

	ngOnInit() {
		let jobObservable = this.job != null
			? this._logsService.getByJobId(this.job.id)
			: this._logsService.get();

		jobObservable.subscribe(logs => {
			this.logs = logs;
		});
	}
}