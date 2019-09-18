import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  public booking;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getBooking(this.route.snapshot.params.id);
  }
  
  getBooking(id:number){
  	this.bookingService.getBooking(id).subscribe(
  		data => {
  			this.booking = data;
  		},
  		err => console.error(err),
  		() => console.log('bookings loaded')
  	);
  }

}
