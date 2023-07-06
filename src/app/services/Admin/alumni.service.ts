import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumni } from 'src/app/shared/alumni.model';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllAlumni(): Observable<Alumni[]> {
    const url = `${this.baseUrl}/GetAllAlumni`;
    return this.http.get<Alumni[]>(url);
  }

  addAlumni(alumni: Alumni): Observable<Alumni> {
    const url = `${this.baseUrl}/AddAlumni`;
    return this.http.post<Alumni>(url, alumni);
  }

  updateAlumni(alumni: Alumni): Observable<Alumni> {
    const url = `${this.baseUrl}/UpdateAlumni`;
    return this.http.put<Alumni>(url, alumni);
  }

  deleteAlumni(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteAlumni?id=${id}`;
    return this.http.delete(url);
  }
}
