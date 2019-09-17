import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  
  getBookings(){
  	return this.http.get('/server/api/v1/bookings');
  }
  
  getBooking(id: number){
  	return this.http.get('/server/api/v1/bookings/' + id);
  }
  
  createBooking(booking){
  	let body = JSON.stringify(booking);
  	return this.http.post('/server/api/v1/bookings', body, httpOptions);
  }
}
