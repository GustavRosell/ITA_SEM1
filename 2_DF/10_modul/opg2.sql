-- OPGAVE 2 -- 
/*
Opret view i music databasen med
*/

-- 2.1) titel og antal tracks på alle albums

CREATE VIEW opg22 AS 
SELECT albums."Title", COUNT(tracks."Name") as "Total Tracks"
FROM albums
JOIN tracks ON albums."AlbumId" = tracks."AlbumId"
GROUP BY albums."Title";

SELECT * 
FROM opg22

-- 2.2) navn, antal tracks og total tid for alle spillelister

CREATE VIEW opg202 AS
SELECT playlists."Name", COUNT(tracks."TrackId") AS TrackCount, SUM(tracks."Milliseconds") AS TotalTime
FROM playlists
JOIN playlist_track ON playlists."PlaylistId" = playlist_track."PlaylistId"
JOIN tracks ON playlist_track."TrackId" = tracks."TrackId"
GROUP BY playlists."PlaylistId";

SELECT *
FROM opg202;