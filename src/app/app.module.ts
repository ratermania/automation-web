import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JobsComponent } from './components/jobs/jobs.component';

import {MatDialogModule } from '@angular/material/dialog'
import { AngularMaterialModule } from './modules/angular-material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { EditJobComponent } from './components/jobs/edit-job.component';
import { LogsComponent } from './components/logs/logs.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AutomationComponent } from './components/automation/automation.component';
import { EditAutomationComponent } from './components/automation/edit-automation.component';

@NgModule({
  declarations: [
	AppComponent,
	EditAutomationComponent,
	AutomationComponent,
	EditJobComponent,
	JobsComponent,
	LoginComponent,
	LogsComponent,
	NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	HttpClientModule,
	FormsModule,

	AngularMaterialModule,
  ],
  entryComponents: [
	  EditAutomationComponent,
	  EditJobComponent,
	  LoginComponent
  ],
  providers: [
	{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
