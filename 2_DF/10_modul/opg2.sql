-- OPGAVE 2 -- 
/*
Opret view i music databasen med
*/

-- 2.1) titel og antal tracks på alle albums

CREATE VIEW opg201 AS 
SELECT tracks."Name", tracks."TrackId"
FROM tracks;

SELECT * 
FROM opg201

-- 2.2) navn, antal tracks og total tid for alle spillelister

CREATE VIEW opg202 AS
SELECT playlists."Name", COUNT(tracks."TrackId") AS TrackCount, SUM(tracks."Milliseconds") AS TotalTime
FROM playlists
JOIN playlist_track ON playlists."PlaylistId" = playlist_track."PlaylistId"
JOIN tracks ON playlist_track."TrackId" = tracks."TrackId"
GROUP BY playlists."PlaylistId";

SELECT *
FROM opg202;