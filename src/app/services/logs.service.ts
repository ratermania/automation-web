import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Log } from "../models/log.model";

@Injectable({
	providedIn: 'root'
})
export class LogsService {
	constructor(private _http: HttpClient) { }

	get(): Observable<Log[]> {
		return this._http.get<Log[]>(`${environment.apiUrl}/logs?query=log|take 250|order by timestamp desc`);
	}

	getByJobId(id: number): Observable<Log[]> {
		return this._http.get<Log[]>(`${environment.apiUrl}/logs/jobs/${id}`);
	}

	getFilterCategories(): Observable<string[]> {
		// This will (likely) be dynamic one day, so it is implemented as an observable so the consumers don't have to change
		return of([
			"Start Time",
			"End Time",
			"Job",
			"Severity",
			"Message"
		]);
	}
}