import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/shared/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllFaculties(): Observable<Faculty[]> {
    const url = `${this.baseUrl}/GetAllFaculty`;
    return this.http.get<Faculty[]>(url);
  }

  addFaculty(faculty: Faculty): Observable<Faculty> {
    const url = `${this.baseUrl}/AddFaculty`;
    return this.http.post<Faculty>(url, faculty);
  }

  updateFaculty(faculty: Faculty): Observable<Faculty> {
    const url = `${this.baseUrl}/UpdateFaculty`;
    return this.http.put<Faculty>(url, faculty);
  }

  deleteFaculty(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteFaculty?id=${id}`;
    return this.http.delete(url);
  }
}
