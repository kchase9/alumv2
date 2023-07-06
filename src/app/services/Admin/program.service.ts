import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from 'src/app/shared/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private baseUrl = "http://localhost:5139"
  constructor(private http: HttpClient) { }

  getAllPrograms(): Observable<Program[]> {
    const url = `${this.baseUrl}/GetAllPrograms`;
    return this.http.get<Program[]>(url);
  }

  addProgram(program: Program): Observable<Program> {
    const url = `${this.baseUrl}/AddProgram`;
    return this.http.post<Program>(url, program);
  }

  updateProgram(program: Program): Observable<Program> {
    const url = `${this.baseUrl}/UpdateProgram`;
    return this.http.put<Program>(url, program);
  }

  deleteProgram(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeleteProgram?id=${id}`;
    return this.http.delete(url);
  }
}
