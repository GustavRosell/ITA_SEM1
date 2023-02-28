-- Opgave A -- 

Select "TrackId", "Name", 
	Cast(Round("Milliseconds"/60000.0, 2) as numeric(10,2)) as "Minutes"
From tracks
Order by "Milliseconds" desc;

-- Opgave B -- 

Select "TrackId", "Name", "UnitPrice", "UnitPrice" + 1.25 as "DownloadPrice"
From tracks;

-- Opgave C -- 

Select "TrackId", "Name", 
    ROUND("UnitPrice" / ("Bytes" / 100000.0), 2) as "PricePer100kBytes"
From tracks
Order by "PricePer100kBytes" desc;