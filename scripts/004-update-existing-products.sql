-- Migration: Update existing products with default values for new columns
-- Run this AFTER running 003-add-product-details-columns.sql
-- This will populate the new columns for all existing products

-- Update all existing products with default/empty values for new columns
-- Only updates rows where these columns are NULL (safe to run multiple times)
UPDATE products
SET 
    short_description = COALESCE(short_description, LEFT(description, 100)),
    ingredients = COALESCE(ingredients, '[]'),
    process_notes = COALESCE(process_notes, '[]'),
    storage = COALESCE(storage, ''),
    allergens = COALESCE(allergens, '[]'),
    nutrition_pdf = COALESCE(nutrition_pdf, NULL),
    badges = COALESCE(badges, '[]'),
    bullets = COALESCE(bullets, '[]'),
    is_provisional_nutrition = COALESCE(is_provisional_nutrition, false),
    featured = COALESCE(featured, false)
WHERE 
    short_description IS NULL 
    OR ingredients IS NULL 
    OR process_notes IS NULL 
    OR storage IS NULL 
    OR allergens IS NULL 
    OR badges IS NULL 
    OR bullets IS NULL 
    OR is_provisional_nutrition IS NULL 
    OR featured IS NULL;

-- Verify the update
SELECT 
    id,
    name,
    short_description,
    ingredients,
    process_notes,
    storage,
    allergens,
    nutrition_pdf,
    badges,
    bullets,
    is_provisional_nutrition,
    featured
FROM products
LIMIT 5;

