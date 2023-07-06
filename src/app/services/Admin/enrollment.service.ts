import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from 'src/app/shared/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllEnrollments(): Observable<Enrollment[]> {
    const url = `${this.baseUrl}/GetAllEnrollments`;
    return this.http.get<Enrollment[]>(url);
  }

  addEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    const url = `${this.baseUrl}/AddEnrollment`;
    return this.http.post<Enrollment>(url, enrollment);
  }

  updateEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    const url = `${this.baseUrl}/UpdateEnrollment`;
    return this.http.put<Enrollment>(url, enrollment);
  }

  deleteEnrollment(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteEnrollment?id=${id}`;
    return this.http.delete(url);
  }
}
