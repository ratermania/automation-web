import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

	user: User;
	applicationTitle: string;

	constructor(private _userService: UserService, private _router: Router) { }

	ngOnInit() {
		this.applicationTitle = environment.applicationTitle;

		this._userService.getUserFromToken().subscribe(user => {
			if (user) {
				this.user = user;
			}
		});
	}

	logout() {
		this._userService.logout()

		window.location.reload();
	}
}
