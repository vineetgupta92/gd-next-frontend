import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getMissingFields(userId: number) : Observable<{ [key: string]: string }>{
    return this.http.get<{ [key: string]: string }>(`${this.apiUrl}/api/form/missing-fields/${userId}`);
  }

  submitForm(userId: number, formData: any) {
    return this.http.post(`${this.apiUrl}/api/form/submit/${userId}`, formData);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/form/fetch-all-users`);
  }

}
