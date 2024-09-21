import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormFieldsService} from "../../services/form-fields.service";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dynamic-form-app',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe,
    NgClass
  ],
  templateUrl: './dynamic-form-app.component.html',
  styleUrl: './dynamic-form-app.component.css'
})
export class DynamicFormAppComponent implements OnInit {

  dynamicForm!: FormGroup;
  missingFields: { [key: string]: string } = {};
  userId: number = 1;

  constructor(private formService: FormFieldsService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userId = parseInt(id);
        console.log('User ID:', this.userId);
      } else {
        console.warn('User ID not found');
      }
    });
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.formService.getMissingFields(this.userId).subscribe((fields: { [key: string]: string }) => {
      this.missingFields = fields;
      this.createForm(fields);
    });
  }

  createForm(fields: any): void {
    const group: any = {};
    for (const key of Object.keys(fields)) {
      console.log(fields[key])
      if (fields[key]) {
        group[key] = ['', Validators.required];
      }
    }
    this.dynamicForm = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.formService.submitForm(this.userId, this.dynamicForm.value).subscribe(response => {
        alert('Form submitted successfully');
        this.router.navigate(['/users']);
      }, error => {
        console.error('Error submitting form', error);
      });
    } else {
      alert('Please fill all required fields');
    }
  }


}
