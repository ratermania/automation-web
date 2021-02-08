import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './components/servers/servers.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from "./components/login/login.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	// { path: 'login', component: LoginComponent },
	{ path: 'jobs', component: JobsComponent, canActivate: [AuthGuardService] },
	{ path: 'automation', component: ServersComponent, canActivate: [AuthGuardService] },
	{ path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
	{ path: '',   redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
