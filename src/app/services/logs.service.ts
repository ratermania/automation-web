import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Log } from "../models/log.model";

@Injectable({
	providedIn: 'root'
})
export class LogsService {
	constructor(private _http: HttpClient) { }

	get(): Observable<Log[]> {
		return this._http.get<Log[]>("http://localhost:61616/logs");
	}

	getByJobId(id: number): Observable<Log[]> {
		return this._http.get<Log[]>(`http://localhost:61616/logs/jobs/${id}`);
	}
}