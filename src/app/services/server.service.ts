import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AutomationOptions } from "../models/automation-options.model";
import { Server } from "../models/server.model";

@Injectable({
	providedIn: 'root'
})
export class ServerService {

	servers: BehaviorSubject<Server[]> = new BehaviorSubject<Server[]>(null);

	constructor (private _http: HttpClient) { }

	addServer(server: Server): Observable<any> {
		return this._http.post(`${environment.identityUrl}/servers/add`, server).pipe(
			map(() => this.getServers().toPromise())
		);
	}

	deleteServer(serverId: number): Observable<any> {
		return this._http.delete(`${environment.identityUrl}/servers/${serverId}`).pipe(
			map(() => this.getServers().toPromise())
		);
	}

	getServers(): Observable<any> {
		return this._http.get<Server[]>(`${environment.identityUrl}/servers`).pipe(
			map(s => this.servers.next(s))
		);
	}

	getOptions(serverUrl: string): Observable<AutomationOptions> {
		return this._http.get<AutomationOptions>(`${serverUrl}/automation/options`);
	}

	saveOptions(automationOptions: AutomationOptions) {
		return this._http.put(`${environment.apiUrl}/automation/options`, automationOptions);
	}
}