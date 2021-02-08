import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { Server } from "src/app/models/server.model";
import { ServerService } from "src/app/services/server.service";
import { AddServerComponent } from "./add-server.component";
import { EditServerComponent } from "./edit-server.component";

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class ServersComponent implements OnInit {

	columns: string[] = ['name', 'url'];
	dataSource: Observable<Server[]>;
	automationOptions: AutomationOptions;

	constructor(private _serverService: ServerService, private _dialog: MatDialog) { }

	ngOnInit() {
		this._serverService.getServers().toPromise();

		this.dataSource = this._serverService.servers;
	}

	addServer() {
		this._dialog.open(AddServerComponent);
	}
}
