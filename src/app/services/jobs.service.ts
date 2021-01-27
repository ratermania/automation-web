import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from "../models/job.model";

@Injectable({
	providedIn: 'root'
})
export class JobsService {

	constructor(private _http: HttpClient) { }

	get(): Observable<Job[]> {
		return this._http.get<Job[]>('http://localhost:61616/jobs');
	}

	run(id: number) {
		return this._http.post(`http://localhost:61616/jobs/run/${id}`, null);
	}

	save(job: Job) {
		return this._http.put(`http://localhost:61616/jobs/${job.id}`, job);
	}
}