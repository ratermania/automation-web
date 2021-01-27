import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomationComponent } from './components/automation/automation.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	// { path: 'login', component: LoginComponent },
	{ path: 'jobs', component: JobsComponent, canActivate: [AuthGuardService] },
	{ path: 'automation', component: AutomationComponent, canActivate: [AuthGuardService] },
	{ path: '',   redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
