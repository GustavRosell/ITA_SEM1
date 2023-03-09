-- Opgave A -- 

/*Create Database IBAS;*/

-- Opgave B -- 

CREATE TABLE bicycle (
bicycle_id SERIAL Primary Key,
bicycle_name varchar (45) Unique NOT NULL,
bicycle_type smallint NOT NULL,
bicycle_description varchar (255) NOT NULL 
	DEFAULT 'No Description'
);

Alter Table "bicycle" 
Add "bicycle_type" varchar(45);

Alter Table bicycle
Drop bicycle_name;

-- Opgave C --

Insert into bicycle (bicycle_type) 
Values('Racer'), ('Mountain'), ('BMX'), ('Dirt'), ('City');

-- Opgave D --

Create table production ( 
bicycle_id SERIAL Primary Key,
production_dt timestamp NOT NULL 
	CHECK (production_dt >= '2023-01-01 00:00:00'),
ral_color_code INTEGER NOT NULL 
	CHECK (ral_color_code BETWEEN 1000 AND 9999),
bike_type_id smallint NOT NULL,
Constraint fk_type_id FOREIGN KEY (bike_type_id)
	References bicycle(bicycle_id)
);


/* E.1)
Indsætter 3 cykler 
*/

SELECT * 
From bicycle;

Insert into production (production_dt, ral_color_code, bike_type_id) 
Values ('2023-03-09 10:00:00', 2010, 5),
('2023-03-08 14:30:00', 4000, 6),
('2023-03-07 09:15:00', 6000, 7);


/* E.2)

Indsætter en cykel fra 2020 */
Insert into production (production_dt, ral_color_code, bike_type_id) 
Values ('2019-03-09 10:00:00', 8000, 5);

/* 
Hvilken regel er i spil her?
Svar: 
ERROR:  new row for relation "production" violates check constraint "production_production_dt_check"
	CHECK (production_dt >= '2023-01-01 00:00:00'),
*/

-- E.3) Indsæt en cykel med et bike_type_id som ikke findes i bicycle_type tabellen. -- 

select bike_type_id
From production;

Insert into production (bike_type_id)
Values(15);

/*
ERROR:  null value in column "production_dt" of relation "production" violates not-null constraint
DETAIL:  Failing row contains (8, null, null, 15).
*/

-- E.4) Indsæt en cykel med farvekode mindre end 1000 og en cykel med farvekode større end 9999. -- 

/* gider ikke til at prøve det her igen, det giver jo sig selv; 
Det er ikke muligt at indsætte cykler med farvekode mindre end 1000 eller større end 9999 i tabellen, 
da der er en CHECK-begrænsning på ral_color_code kolonnen, 
der sikrer, at værdien skal være mellem 1000 og 9999.
*/

-- Opgave F) Opret en customer tabel. 
/* 
Tilføj kolonner for: customer_id, name, address, postalcode, city og country. 
Overvej: datatyper, nøgler og constraints. Lidt hjælp: Customer id skal være primary key. 
Overvej om der er nogle constraints på postal_code – vi antager danske postnumre.
*/

CREATE TABLE customer (
  customer_id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  address varchar(50) NOT NULL,
  postalcode CHAR(4) NOT NULL,
  city varchar(50) NOT NULL,
  country varchar(50) NOT NULL,
	CONSTRAINT postalcode_format CHECK (LENGTH(postalcode) = 4)
);

select * 
from customer;

-- Opgave G) 
/*
Opret en tabel med navnet shipment. 
Tilføj felterne: shipment_id, bicycle_id, shipment_date, customer_id, carrier_name.
Overvej: datatyper, nøgler og constraints og hvordan sammenhængen med customer tabellen fra opgave F og tabellen fra D.
Lidt hjælp:
shipment_id skal være Primary Key.
Customer_id skal være foreign_key som refererer til customer(customer_id) (altså til customer_id I customer tabellen)
Bicycle_id skal være en foreign key som referer til bicycle_production(bicycle_id)
*/

CREATE TABLE shipment (
	shipment_id SERIAL PRIMARY KEY,
	bicycle_id INTEGER NOT NULL,
	shipment_date DATE NOT NULL,
	customer_id INTEGER NOT NULL,
	carrier_name VARCHAR(50) NOT NULL,
	CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) 
		REFERENCES customer(customer_id),
	CONSTRAINT fk_bicycle_id FOREIGN KEY (bicycle_id) 
		REFERENCES production(bicycle_id)
);

Select *
from shipment;