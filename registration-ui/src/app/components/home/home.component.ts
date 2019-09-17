import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: string[] = [
  	'Skin Care',
  	'Face Treatment',
  	'Body Massage'
  ];
  bookingForm: FormGroup;
  validMessage: string = "";

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  	this.bookingForm = new FormGroup({
  		service: new FormControl('', Validators.required),
  		clientName: new FormControl('', Validators.required),
  		date: new FormControl('', Validators.required),
  		time: new FormControl('', Validators.required),
  		price: new FormControl('', Validators.required),
  		contactPhone: new FormControl('', Validators.required),
  		contactEmail: new FormControl('')
  	});
  }
  
  submitBooking(){
  	
  	if(this.bookingForm.valid){
  		this.validMessage = "Your booking has been submitted. Thank you!";
  		this.bookingService.createBooking(this.bookingForm.value).subscribe(
  			data => {
  				this.bookingForm.reset();
  				return true;
  			},
  			error => {
  				return Observable.throw(error);
  			}
  		)
  	} else {
  		this.validMessage = "Please fill out the form before submitting!";
  	}
  }

}
