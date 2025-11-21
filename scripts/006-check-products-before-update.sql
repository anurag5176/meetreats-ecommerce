-- First, run this to see what products you have in your database
-- This will help identify the correct slugs/names to match

SELECT 
    id,
    name,
    slug,
    category,
    price,
    weight,
    in_stock,
    created_at
FROM products
ORDER BY id;

-- After seeing the results, you can adjust the UPDATE queries in 
-- 005-populate-products-with-static-data.sql to match your actual product names/slugs

