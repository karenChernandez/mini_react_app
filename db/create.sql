INSERT INTO orders
(itemOrder, quantity)
VALUES
($1, $2);
SELECT * FROM orders;