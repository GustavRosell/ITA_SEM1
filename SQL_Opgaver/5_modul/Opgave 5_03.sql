-- Opgave 5.03 --

-- Opgave A - Filtrering: IN & Between -- 

-- Opgave A.01 -- 

Select *
From tracks
Where "Bytes" Between 1000000000 AND 2000000000
Order by "Bytes" asc;

-- Opgave A.02 -- 

Select *
From tracks
Where "Bytes" >= 1000000000 AND "Bytes" <= 2000000000
Order by "Bytes" asc;

-- Opgave A.03 -- 
/*
Det tror jeg ikke
*/

-- Opgave A.04 --

SELECT *
FROM tracks
WHERE "GenreId" NOT IN (1, 2);

-- Opgave B – Filtrering: Like & ILike --
-- Opgave B.01 -- 

Select *
From tracks
Where "Name" Like 'M%'

-- Opgave B.02 -- 

Select *
From tracks
Where "Name" ILike '%love%'

-- Opgave B.03 -- 

/*
Beskriv hvad du får med udtrykket
*/

SELECT "Name" 
FROM tracks 
WHERE "Name" 
ILIKE '_all%'

/*
Udtrækker alle navne fra tabellen 'tracks', som har 'all' i titlen, 
men også hvor bogstavet før 'a' kan være alt
*/

-- Opgave C – Sortering -- 
-- Opgave C.01 -- 

Select * 
From tracks
Where "MediaTypeId" = 2
Order by "Milliseconds" desc;

-- Opgave C.02 -- 

Select * 
From tracks
Where "MediaTypeId" = 2
Order by "Milliseconds" asc;

-- Opgave C.03 -- 

Select *
From tracks
Where "UnitPrice" = 1.99
Order by "Milliseconds" desc, "Bytes" asc;