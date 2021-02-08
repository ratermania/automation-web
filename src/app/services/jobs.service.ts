import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Job } from "../models/job.model";

@Injectable({
	providedIn: 'root'
})
export class JobsService {

	constructor(private _http: HttpClient) { }

	get(): Observable<Job[]> {
		return this._http.get<Job[]>(`${environment.apiUrl}/jobs`);
	}

	run(id: number) {
		return this._http.post(`${environment.apiUrl}/jobs/run/${id}`, null);
	}

	save(job: Job) {
		return this._http.put(`${environment.apiUrl}/jobs`, job);
	}
}