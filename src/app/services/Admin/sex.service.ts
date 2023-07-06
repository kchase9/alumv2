import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sex } from 'src/app/shared/sex.model';

@Injectable({
  providedIn: 'root'
})
export class SexService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllSex(): Observable<Sex[]> {
    const url = `${this.baseUrl}/GetAllSex`;
    return this.http.get<Sex[]>(url);
  }

  addSex(sex: Sex): Observable<Sex> {
    const url = `${this.baseUrl}/AddSex`;
    return this.http.post<Sex>(url, sex);
  }

  updateSex(sex: Sex): Observable<Sex> {
    const url = `${this.baseUrl}/UpdateSex`;
    return this.http.put<Sex>(url, sex);
  }

  deleteSex(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteSex?id=${id}`;
    return this.http.delete(url);
  }
}
