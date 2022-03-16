import { Component,  OnInit } from "@angular/core";
import { Log } from "src/app/models/log.model";
import { LogsService } from "src/app/services/logs.service";

@Component({
	selector: 'app-logs',
	templateUrl: './logs.component.html',
	styleUrls: ['./logs.component.less']
})
export class LogsComponent implements OnInit {
	logs: Log[];
	filters: string[] = Array.of(
		"Start Time",
		"End Time",
		"Job",
		"Severity",
		"Message"
	);

	constructor(private _logsService: LogsService) { }

	ngOnInit() {
		this._logsService.get().subscribe(logs => {
			this.logs = logs;
		});
	}
}