package pl.purtova.registration.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import pl.purtova.registration.models.Booking;

/**
 * A REST controller for bookings
 * 
 * @author olsuv
 */
@RestController
@RequestMapping("/api/v1/bookings")
public class BookingController {
	
	@GetMapping
	public List<Booking> list() {
		return Collections.<Booking>emptyList();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Booking booking) {
		
	}
	
	@GetMapping("/{id}")
	public Booking get(@PathVariable("id") long id) {
		return new Booking();
	}
}
