import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {DynamicFormAppComponent} from "./components/dynamic-form-app/dynamic-form-app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UserListComponent} from "./components/user-list/user-list.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicFormAppComponent,
    UserListComponent,
    AppComponent
  ],
})
export class AppModule { }
