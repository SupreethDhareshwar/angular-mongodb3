import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './models/hotel.model';
import { Observable }   from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHotelListing(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('http://localhost:3001/api/hotelData');
  }
}