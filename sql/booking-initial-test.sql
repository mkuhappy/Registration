CREATE TABLE booking (
	id BIGINT NOT NULL,
	service VARCHAR,
	client VARCHAR,
	booking_time VARCHAR,
	booking_date DATETIME,
	price NUMERIC,
	phone VARCHAR,
	email VARCHAR,
	done BOOLEAN NOT NULL,
	cancelled BOOLEAN NOT NULL,
	no_show BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE hibernate_sequence (
	next_val BIGINT
);

INSERT INTO booking (id, service, client, booking_time, booking_date, price, phone, email, done, cancelled, no_show) VALUES (1, 'Face Massage', 'Oleg S.', '11:30', 4419619200000, '70', '+48500000000','my-email@example.org',1,0,0);
INSERT INTO booking (id, service, client, booking_time, booking_date, price, phone, email, done, cancelled, no_show) VALUES (2, 'Back Massage', 'Oleg S.', '10:00', 4419619200000, '100', '+48500000000','my-email@example.org',0,1,0);
INSERT INTO booking (id, service, client, booking_time, booking_date, price, phone, email, done, cancelled, no_show) VALUES (3, 'The Best Peeling', 'Oleg S.', '12:00', 4419619200000, '30', '+48500000000','my-email@example.org',0,0,1);

INSERT INTO hibernate_sequence (next_val) VALUES (4);