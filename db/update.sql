-- UPDATE orders
-- SET itemOrder = $2,
--     quantity =$3
-- WHERE id= $1;

-- SELECT * FROM orders;
UPDATE orders
SET itemOrder =$2,
    quantity =$3
WHERE id =$1;
SELECT * FROM orders;