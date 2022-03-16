import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Job } from "../models/job.model";

@Injectable({
	providedIn: 'root'
})
export class JobsService {

	jobs: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>(null);

	constructor(private _http: HttpClient) { }

	getJobs(url: string): Observable<any> {
		return this._http.get<Job[]>(`${url}/jobs`).pipe(
			map(j => this.jobs.next(j))
		);
	}

	run(url: string, id: number) {
		return this._http.post(`${url}/jobs/run/`, {
			id: id,
			//arguments: ''
		}).pipe(
			map(() => this.getJobs(url).toPromise())
		);
	}

	save(url: string, job: Job) {
		return this._http.put(`${url}/jobs`, job).pipe(
			map(() => this.getJobs(url).toPromise())
		);
	}
}