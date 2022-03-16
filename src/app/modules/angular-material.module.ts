import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatTableModule,
		MatSnackBarModule,
		MatChipsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatIconModule,
		MatSidenavModule,
		MatMenuModule,
		MatTooltipModule,
		MatSelectModule
	],
	exports: [
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatTableModule,
		MatSnackBarModule,
		MatChipsModule,
		MatDatepickerModule,
		MatSlideToggleModule,
		MatIconModule,
		MatSidenavModule,
		MatMenuModule,
		MatToolbarModule,
		MatSelectModule
	]
})
export class AngularMaterialModule { }