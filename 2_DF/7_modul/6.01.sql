-- Opgave 1.A -- 
Select * 
From genres

Insert into "genres" 
Values(28, 'MakkerMusik'), (29, 'Salsa'), (30, 'Siu');

-- Opgave 1.B -- 

Update "genres"
Set "Name" = 'Soft rock'
Where "Name" = 'Siu'

Select * 
From genres

-- Opgave 1.C -- 

Delete From "genres"
Where "Name" = 'Soft rock'

Select * 
From genres

-- Opgave 1.D -- 

Select *
From artists
Where "Name" = 'Aerosmith'

Select * 
From "albums"

Insert into "albums" 
Values(348, 'Get a Grip', 3)

-- Opgave 1.E -- 

Delete From "artists"
Where "Name" = 'Aerosmith'

/* 
Den siger: 
ERROR:  update or delete on table "artists" violates foreign key constraint "albums_ArtistId_fkey" on table "albums"
DETAIL:  Key (ArtistId)=(3) is still referenced from table "albums".
*/ 

-- Opgave 1.F -- 
/*
Du har skrevet en ny sang, som du gerne vil tilføje i tracks tabellen. 
1. Find ud af hvilke tabeller, du ellers har brug for at indsætte i, for at efterlade databasen i en konsekvent tilstand, 
2. og hvilke informationer du har brug for om din nyskrevne sang. 
Brug din fantasi 😊

F.1 Hvis man skal tilføje en sang, skal man nok bruge:
- tracks
- albums
- artists

F.1 Man har brug for al' informationen man skal bruge til tabellerne lol kekw
*/

-- Indsætter ind i tracks -- 
Select *
From "tracks"
Order by "TrackId" desc;

Insert into "tracks" 
values (3504, 'Siuuu Makker', 348, 2, 8, 'G-Money', 4206969, 4206969, 0.99)

-- Indsætter ind i Albums -- 
Select * 
From "albums"
Order by "AlbumId" desc

Insert into "albums"
values (349, 'Siu & Min Makker', 276);

-- Indsætter ind i artists -- 
Select *
From "artists"
Order by "ArtistId" desc

Insert into "artists"
values (276, 'G-Money')