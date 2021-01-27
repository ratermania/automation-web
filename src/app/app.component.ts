import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent  {

	constructor(private _userService: UserService, private _router: Router) { }

	logout() {
		this._userService.logout()
		
		window.location.reload();
	}
}
