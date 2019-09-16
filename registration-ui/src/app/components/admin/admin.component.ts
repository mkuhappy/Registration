import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bookings;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  	this.getBookings();
  }
  
  getBookings(){
  	this.bookingService.getBookings().subscribe(
  		data => { this.bookings = data},
  		err => console.error(err),
  		() => console.log('bookings loaded')
  	);
  }

}
