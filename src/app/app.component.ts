import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DynamicFormAppComponent} from "./components/dynamic-form-app/dynamic-form-app.component";
import {UserListComponent} from "./components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, DynamicFormAppComponent, RouterLink, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gd-next-frontend';
}
