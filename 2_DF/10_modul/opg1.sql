-- Kig på Music databasen som I har arbejde med tidligere. Skriv select statement som via join giver følgende udtræk:

-- 1.A) Name og Album titel for alle tracks. --
SELECT tracks."Name", albums."Title"
FROM tracks
JOIN albums ON tracks."AlbumId" = albums."AlbumId";

-- 1.B) Name for alle tracks på en given spilleliste, fx. spillelisten "On-The-Go 1" som har id = 18... --


SELECT tracks."Name", playlists."Name"
FROM tracks
JOIN playlists ON tracks."AlbumId" = playlists."PlaylistId";

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










