import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class BasicAlumniService {
  private baseUrl = "http://localhost:5139"

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/GetAllUsers`;
    return this.http.get<User[]>(url);
  }

  addUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/AddUser`;
    return this.http.post<User>(url, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/UpdateUser`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteUser?id=${id}`;
    return this.http.delete(url);
  }
}
