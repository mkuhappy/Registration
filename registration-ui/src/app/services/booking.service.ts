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
  	let token = localStorage.getItem('access_token');
  	return this.http.get('/server/api/v1/bookings',
  		{headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }
  
  getBooking(id: number){
  	let token = localStorage.getItem('access_token');
  	return this.http.get('/server/api/v1/bookings/' + id,
  		{headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }
  
  createBooking(booking){
  	let body = JSON.stringify(booking);
  	return this.http.post('/server/api/v1/bookings', body, httpOptions);
  }
}
