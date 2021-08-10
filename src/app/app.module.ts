import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmMessageComponent } from './components/shared/confirm-message/confirm-message.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ConfirmMessageComponent, ListEmployeeComponent, AddEditEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
