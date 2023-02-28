-- Opgave 1 -- 

Select genres."Name" as Genre, Count(tracks."TrackId") as "Antal tracks"
From tracks 
Join genres on tracks."GenreId" = genres."GenreId"
Group by genres."GenreId", genres."Name"
Order by "Antal tracks" desc;

-- Kom til at joine ups; her uden join: -- 

Select "GenreId", Count(*) as "Total tracks"
From tracks
Group by "GenreId"
Order by "Total tracks" desc;

-- Opgave 2 --

Select "GenreId", "MediaTypeId", Count(*) as "Total tracks"
From tracks
Group by "MediaTypeId", "GenreId"
Order by "MediaTypeId" asc;

-- Opgave 3 (fatter ikke helt) --

Select "TrackId", Count(*) as "Antal på playlister"
From playlist_track
Group by "TrackId"
Order by "Antal på playlister" desc;

-- Opgave 4 -- 

Select "GenreId", SUM("Bytes") as "Total Bytes"
From tracks
Group by "GenreId"
Order by "Total Bytes" asc;

-- Opgave 5 -- 

Select "MediaTypeId", Count(*) as "Total tracks", SUM("UnitPrice") as "Total Price"
From tracks
Group by "MediaTypeId"
Order by "MediaTypeId" asc;