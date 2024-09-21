import { Component } from '@angular/core';
import {FormFieldsService} from "../../services/form-fields.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];

  constructor(private formService: FormFieldsService) { }

  ngOnInit(): void {
    this.formService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
