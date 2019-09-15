package pl.purtova.registration.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.purtova.registration.models.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}