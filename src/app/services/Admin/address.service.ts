import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../../shared/address.model';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
    private baseUrl = "http://localhost:5139"

  constructor(private http : HttpClient) { }


  getAllAddresses(): Observable<Address[]> {
    const url = `${this.baseUrl}/GetAllAddresses`;
    return this.http.get<Address[]>(url);
  }

  addAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/AddAddress`;
    return this.http.post<Address>(url, address);
  }

  updateAddress(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/UpdateAddress`;
    return this.http.put<Address>(url, address);
  }

  deleteAddress(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteAddress?id=${id}`;
    return this.http.delete(url);
  }
}
