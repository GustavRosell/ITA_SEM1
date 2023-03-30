CREATE TABLE kunder (
  id SERIAL PRIMARY KEY,
  navn TEXT NOT NULL,
  adresse TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE ordrer (
  id SERIAL PRIMARY KEY,
  kunde_id INTEGER NOT NULL REFERENCES kunder(id),
  dato DATE NOT NULL,
  leveringsadresse TEXT NOT NULL,
  betalingsmetode TEXT NOT NULL
);

CREATE TABLE varer (
  id SERIAL PRIMARY KEY,
  navn TEXT NOT NULL,
  beskrivelse TEXT NOT NULL,
  pris NUMERIC(10, 2) NOT NULL
);

CREATE TABLE ordrelinjer (
  id SERIAL PRIMARY KEY,
  ordre_id INTEGER NOT NULL REFERENCES ordrer(id),
  vare_id INTEGER NOT NULL REFERENCES varer(id),
  antal INTEGER NOT NULL,
  pris NUMERIC(10, 2) NOT NULL
);
