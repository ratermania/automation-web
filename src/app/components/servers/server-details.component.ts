import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { Job } from "src/app/models/job.model";
import { Server } from "src/app/models/server.model";
import { ServerService } from "src/app/services/server.service";

@Component({
	selector: 'app-server-details',
	templateUrl: './server-details.component.html',
	styleUrls: ['./server-details.component.less']
})
export class ServerDetailsComponent implements OnInit {

	automationOptions: AutomationOptions = null;

	constructor(@Inject(MAT_DIALOG_DATA) public server: Server, private _serverService: ServerService, private _dialogRef: MatDialogRef<ServerDetailsComponent>) { }

	ngOnInit() {
		this._serverService.getOptions(this.server.url).subscribe(options => {
			this.automationOptions = options;
		});
	}

	close() {
		this._dialogRef.close();
	}
}