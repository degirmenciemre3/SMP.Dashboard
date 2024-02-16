import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  
  getAvailableClasses(): Observable<any[]>{
    const url = `${this.apiUrl}/Class`;
    return this.http.get<any[]>(url);
  }

  deleteClass(body:any): Observable<any>{
    const url = `${this.apiUrl}/Class/DeleteClass`;
    return this.http.post(url,body);
  }
}
