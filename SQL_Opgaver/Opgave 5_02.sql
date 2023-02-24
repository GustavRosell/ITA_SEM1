-- Opgave 5.02 A --

/*
Opgave A – SELECT
Beskriv hvad og hvor der trækkes data ud fra Music databasen, 
med følgende udtryk:

SELECT “Name”, “Composer”, “UnitPrice” FROM tracks;
 - Utrækker kolonnerne: navn, composer og unitprice fra tabellen tracks.
 
SELECT * FROM artists;
 - Udtrækker ALLE kolonner fra tabellene artists.

SELECT “Name” FROM genres;
 - Udtrækker kolonnen navn fra tabellen genres.
*/

-- Opgave 5.02 B --

/*
Opgave B – DISTINCT, LIMIT, OFFSET
Hvor mange rækker får du? (Hint: kig i output-vinduet)
*/

SELECT "UnitPrice" 
FROM tracks;
-- 3503 --
SELECT DISTINCT "UnitPrice"
FROM tracks;
-- 2, da duplicates er fjernet --
SELECT * 
FROM tracks 
LIMIT 10;
-- 10, da der er limit på 10 --

SELECT * 
FROM tracks 
LIMIT 50 
OFFSET 10;
-- 50, da der er limit på 50. OBS: starter fra linje 10 (offset = 10) --
-- Hvad er forskellen på 3 og 4?-- 
-- 4 starter fra linje 10 (offset = 10) -- 

-- Opgave C Filtrering med WHERE -- 

-- Opgave C.01 -- 

Select "Milliseconds"
From tracks
where "Milliseconds" > 400000
Order by "Milliseconds" asc;

-- Opgave C.02 -- 

Select "Milliseconds"
From tracks
where "Milliseconds" > 400000 AND "Milliseconds" < 500000
Order by "Milliseconds" asc;

-- Opgave C.03 -- 

Select "TrackId", "Name", "Composer"
From tracks
Where "GenreId" = 2
Limit 5;

-- Opgave C.04 -- 
/*
Ved at øge Limit med 5? Eller sætte Offset til 5, så får man 5-10
*/











