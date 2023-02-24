-- Opgave 1 -- 

Select "Name" 
From tracks;

--Ser alle sange i databasen


-- Opgave 2 --
/**
TrackId
Name
AlbumID
MediaTypeId
GenreID
Composer
Milliseconds
Bytes
UnitPrice
*/

-- Opgave 3 -- 

SELECT "Name", "Composer", "UnitPrice"
From Tracks;

 -- 3503 sange i alt -- 
 
 -- Opgave 4 --

SELECT "AlbumId", "Title", "ArtistId"
From albums
Where "Title" = 'Into The Light'
Order by "Title" asc;

-- Into the Light har ArtistId'et = 55 --
-- Into the Light har AlbumId'et = 40 --


