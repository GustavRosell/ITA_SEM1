-- Opgave 1 -- 

/*Create Database IBAS;*/

-- Opgave 2 -- 

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

-- Opgave 3 --

Insert into bicycle (bicycle_type) 
Values('Racer'), ('Mountain'), ('BMX'), ('Dirt'), ('City');

-- Opgave 4 --

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

-- Opgave 5 --
/* a)
Indsætter 3 cykler 
*/

SELECT * 
From bicycle;

Insert into production (production_dt, ral_color_code, bike_type_id) 
Values ('2023-03-09 10:00:00', 2010, 5),
('2023-03-08 14:30:00', 4000, 6),
('2023-03-07 09:15:00', 6000, 7);


/* b)

Indsætter en cykel fra 2020 */
Insert into production (production_dt, ral_color_code, bike_type_id) 
Values ('2019-03-09 10:00:00', 8000, 5);


/* 
Hvilken regel er i spil her?
Svar: 
ERROR:  new row for relation "production" violates check constraint "production_production_dt_check"
	CHECK (production_dt >= '2023-01-01 00:00:00'),
*/
/* c)

*/