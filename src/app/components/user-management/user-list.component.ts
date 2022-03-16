import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    users: User[] = [];

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this._userService.getUsers().subscribe(users => {
            this.users = users;
        });
    }
}