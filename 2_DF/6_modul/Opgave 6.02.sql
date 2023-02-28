-- Opgave 1 (skal jeg joine? idk gjorde bare sådan her) --

Select count(*) as "Total Tracks", 
(Select count(*) From playlists) as "Total Playlists"
From tracks;

-- Opgave 2 -- 

Select count(*) as "Antal sange, der starter med bogstavet 'm':"
From tracks
Where "Name" Like 'M%';

-- Opgave 3 -- 

Select 
	SUM("Bytes") as "Total Bytes"
From tracks;

-- Opgave 4 --

Select 
	Round(SUM("Milliseconds" / 1000.0 / 60.0 / 60.0), 2) as "Total Timer"
From tracks;

-- Opgave 5 --

Select
MAX("Milliseconds") as "Længste sang", 
MIN("Milliseconds") as "Korteste sang"
From tracks;

-- Opgave 6 --

Select Count(*) as "Antal artister som starter med 'mar'"
From artists
Where "Name" Like 'Mar%'

-- Opgave 7 -- 

Select Round(AVG("Milliseconds" / 1000), 2) as "Gennemsnitslig sang-varighed"
From tracks;

-- Opgave 8 -- 

Select "GenreId", SUM("UnitPrice") as "Total Pris"
From tracks
Group by "GenreId"
Order by "Total Pris" desc;