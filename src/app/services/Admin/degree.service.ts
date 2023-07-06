import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degree } from 'src/app/shared/degree.model';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllDegrees(): Observable<Degree[]> {
    const url = `${this.baseUrl}/GetAllDegrees`;
    return this.http.get<Degree[]>(url);
  }

  addDegree(degree: Degree): Observable<Degree> {
    const url = `${this.baseUrl}/AddDegrees`;
    return this.http.post<Degree>(url, degree);
  }

  updateDegree(degree: Degree): Observable<Degree> {
    const url = `${this.baseUrl}/UpdateDegrees`;
    return this.http.put<Degree>(url, degree);
  }

  deleteDegree(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteDegrees?id=${id}`;
    return this.http.delete(url);
  }
}
