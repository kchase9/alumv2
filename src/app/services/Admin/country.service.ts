import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/shared/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    const url = `${this.baseUrl}/GetAllCountries`;
    return this.http.get<Country[]>(url);
  }

  addCountry(country: Country): Observable<Country> {
    const url = `${this.baseUrl}/AddCountry`;
    return this.http.post<Country>(url, country);
  }

  updateCountry(country: Country): Observable<Country> {
    const url = `${this.baseUrl}/UpdateCountry`;
    return this.http.put<Country>(url, country);
  }

  deleteCountry(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteCountry?id=${id}`;
    return this.http.delete(url);
  }
}
