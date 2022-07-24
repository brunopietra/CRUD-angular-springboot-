import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = 'http://localhost:8080/people';

  constructor(private http: HttpClient) { }

  getPeople(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPeople(people: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, people);
  }

  updatePeople(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePeople(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPeopleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
