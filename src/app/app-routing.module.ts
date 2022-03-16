import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './components/servers/servers.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from "./components/login/login.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserListComponent } from './components/user-management/user-list.component';

const routes: Routes = [
	// { path: 'login', component: LoginComponent },
	{ path: 'servers', component: ServersComponent, canActivate: [AuthGuardService] },
	{ path: 'users', component: UserListComponent, canActivate: [AuthGuardService] },
	{ path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
	{ path: '', redirectTo: '/servers', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
