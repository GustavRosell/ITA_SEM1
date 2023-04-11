-- Kig på Music databasen som I har arbejde med tidligere. Skriv select statement som via join giver følgende udtræk:

-- 1.A) Name og Album titel for alle tracks. --
SELECT tracks."Name", albums."Title"
FROM tracks
JOIN albums ON tracks."AlbumId" = albums."AlbumId";

-- 1.B) Name for alle tracks på en given spilleliste, fx. spillelisten "On-The-Go 1" som har id = 18... --

SELECT tracks."Name", playlists."Name"
FROM tracks
JOIN playlists ON tracks."AlbumId" = playlists."PlaylistId"
WHERE playlists."PlaylistId" = 18;

-- 1.C) Name, artists.Name, genres.Name, mediatypes.Name for alle tracks. --

SELECT tracks."Name", artists."Name" AS Artist, genres."Name" AS Genre, media_types."Name" AS MediaType
FROM tracks
JOIN albums ON tracks."AlbumId" = albums."AlbumId"
JOIN artists ON albums."ArtistId" = artists."ArtistId"
JOIN genres ON tracks."GenreId" = genres."GenreId"
JOIN media_types ON tracks."MediaTypeId" = media_types."MediaTypeId";


-- 1.D) Name, artists.Name, genres.Name, mediatypes.Name for alle tracks på en given spilleliste. --

SELECT tracks."Name", artists."Name" AS Artist, genres."Name" AS Genre, media_types."Name" AS MediaType
FROM tracks
JOIN playlist_track ON tracks."TrackId" = playlist_track."TrackId"
JOIN albums ON tracks."AlbumId" = albums."AlbumId"
JOIN artists ON albums."ArtistId" = artists."ArtistId"
JOIN genres ON tracks."GenreId" = genres."GenreId"
JOIN media_types ON tracks."MediaTypeId" = media_types."MediaTypeId"
WHERE playlist_track."PlaylistId" = 16;


-- 1.E) Name for alle tracks inden for genren med navn 'Latin' --

SELECT tracks."Name"
FROM tracks
JOIN genres ON tracks."GenreId" = genres."GenreId"
WHERE genres."Name" = 'Latin';

-- OPGAVE 2 -- 
/*
Opret view i music databasen med
*/

-- 2.1) titel og antal tracks på alle albums

CREATE VIEW opg201 AS 
SELECT albums."Title", COUNT(tracks."Name") as "Total Tracks"
FROM albums
JOIN tracks ON albums."AlbumId" = tracks."AlbumId"
GROUP BY albums."Title";

SELECT * 
FROM opg201;

-- 2.2) navn, antal tracks og total tid for alle spillelister

CREATE VIEW opg202 AS
SELECT playlists."Name", COUNT(tracks."TrackId") AS TrackCount, SUM(tracks."Milliseconds") AS TotalTime
FROM playlists
JOIN playlist_track ON playlists."PlaylistId" = playlist_track."PlaylistId"
JOIN tracks ON playlist_track."TrackId" = tracks."TrackId"
GROUP BY playlists."PlaylistId"

SELECT *
FROM opg202