import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Travel } from './interfaces/travel/travel';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  /*Properties */
  private travelUrl = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /*Methods */
  getAllTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.travelUrl);
  }

  getTravel(id: string): Observable<Travel> {
    const url: string = `${this.travelUrl}/travel/${id}`;
    return this.http.get<Travel>(url);
  }

  deleteTravel(id_travel: string): Observable<Travel> {
    const url: string = `${this.travelUrl}/delete/${id_travel}`;
    return this.http
      .delete<Travel>(url)
    }

  updateTravel(travel: Travel): Observable<Travel> {
    const url: string = `${this.travelUrl}/update/${travel.id_travel}`;
    return this.http.put<Travel>(url, travel, this.httpOptions);
  }

  addTravel(travel: Travel): Observable<Travel> {
    const url: string = `${this.travelUrl}/create`;
    return this.http.post<Travel>(url, travel, this.httpOptions);
  }
}
