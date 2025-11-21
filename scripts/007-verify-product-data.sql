-- Verify that product details are in the database
-- Run this to check if the data was successfully updated

SELECT 
    id,
    name,
    slug,
    short_description,
    ingredients,
    process_notes,
    storage,
    allergens,
    badges,
    bullets,
    is_provisional_nutrition,
    featured
FROM products
ORDER BY id;

-- If you see NULL or empty values, the UPDATE query didn't work
-- Check the WHERE clauses in 005-populate-products-with-static-data.sql
-- and make sure they match your actual product slugs/names

