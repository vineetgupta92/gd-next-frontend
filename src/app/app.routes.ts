import { Routes } from '@angular/router';
import {UserListComponent} from "./components/user-list/user-list.component";
import {DynamicFormAppComponent} from "./components/dynamic-form-app/dynamic-form-app.component";

export const routes: Routes = [
    { path: 'dynamic-form/:id', component: DynamicFormAppComponent },
    { path: 'users', component: UserListComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', redirectTo: '/users' }
];
