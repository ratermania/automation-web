import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AutomationOptions } from "../models/automation-options.model";

@Injectable({
	providedIn: 'root'
})
export class AutomationService {

	constructor (private _http: HttpClient) { }

	getOptions(): Observable<AutomationOptions> {
		return this._http.get<AutomationOptions>("http://localhost:61616/automation/options");
	}

	saveOptions(automationOptions: AutomationOptions) {
		return this._http.put('http://localhost:61616/automation/options', automationOptions);
	}
}