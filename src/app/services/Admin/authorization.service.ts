import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authorized } from 'src/app/shared/authorization.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllAuthorization(): Observable<Authorized[]> {
    const url = `${this.baseUrl}/GetAllAuthorization`;
    return this.http.get<Authorized[]>(url);
  }

  addAuthorization(authorization: Authorized): Observable<Authorized> {
    const url = `${this.baseUrl}/AddAuthorization`;
    return this.http.post<Authorized>(url, authorization);
  }

  updateAuthorization(authorization: Authorized): Observable<Authorized> {
    const url = `${this.baseUrl}/UpdateAuthorization`;
    return this.http.put<Authorized>(url, authorization);
  }

  deleteAuthorization(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteAuthorization?id=${id}`;
    return this.http.delete(url);
  }

}
