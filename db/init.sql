CREATE TABLE IF NOT EXISTS foodorders(
    id SERIAL PRIMARY KEY,
    itemOrder TEXT,
    quantity NUMERIC
);
DROP TABLE IF EXISTS foodorders;

CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    itemOrder TEXT,
    quantity NUMERIC
);