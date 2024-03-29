import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  getStudents(): Observable<any[]> {
    const url = `${this.apiUrl}/Student`;
    return this.http.get<any[]>(url);
  }
  addStudent(student:any): Observable<any> {
    const url = `${this.apiUrl}/Student`;
    console.log(url);
    console.log(student)
    return this.http.post(url, student);
  }
}
