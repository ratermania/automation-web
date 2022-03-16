import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { Server } from "src/app/models/server.model";
import { ServerService } from "src/app/services/server.service";
import { AddServerComponent } from "./add-server.component";
import { DeleteServerComponent } from "./delete-server.component";
import { EditServerComponent } from "./edit-server.component";
import { ServerDetailsComponent } from "./server-details.component";

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.less'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class ServersComponent implements OnInit {

	columns: string[] = ['name', 'url', 'actions'];
	dataSource: BehaviorSubject<Server[]>;
	automationOptions: AutomationOptions;

	constructor(private _serverService: ServerService, private _dialog: MatDialog) { }

	ngOnInit() {
		this._serverService.getServers().toPromise();

		this.dataSource = this._serverService.servers;
	}

	preventDefault(event: Event) {
		event.stopPropagation();
	}

	addServer() {
		this._dialog.open(AddServerComponent);
	}

	deleteServer(server: Server) {
		this._dialog.open(DeleteServerComponent, {
			data: server
		});
	}

	editServer(server: Server) {
		this._dialog.open(EditServerComponent, {
			data: { ...server }
		});
	}

	viewDetails(server: Server) {
		this._dialog.open(ServerDetailsComponent, {
			data: server
		});
	}

	tabClick(event: MatTabChangeEvent) {
		console.log(event)
	}
}
