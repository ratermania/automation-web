import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AutomationOptions } from "src/app/models/automation-options.model";
import { AutomationService } from "src/app/services/automation.service";
import { EditAutomationComponent } from "./edit-automation.component";

@Component({
	selector: 'app-automation',
	templateUrl: './automation.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class AutomationComponent implements OnInit {

	columns: string[] = ['name', 'actions'];
	dataSource: string[] = ['Automation Server'];
	automationOptions: AutomationOptions;

	constructor(private _automationService: AutomationService, private _dialog: MatDialog) { }

	ngOnInit() {
		this._automationService.getOptions().subscribe(options => {
			this.automationOptions = options;
		});
	}

	editAutomationOptions() {
		this._dialog.open(EditAutomationComponent, {
			data: { ...this.automationOptions }
		});
	}	
}
