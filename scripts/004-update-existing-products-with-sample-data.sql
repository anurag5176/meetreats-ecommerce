-- Migration: Update existing products with sample/default values
-- This version sets sample data for demonstration purposes
-- Run this AFTER running 003-add-product-details-columns.sql

-- Update all existing products with sample values
-- WARNING: This will overwrite NULL values with sample data
-- Only run this if you want to populate with sample data

UPDATE products
SET 
    -- Use first 100 characters of description as short_description if not set
    short_description = COALESCE(
        NULLIF(short_description, ''), 
        COALESCE(LEFT(description, 100), 'Premium quality product')
    ),
    
    -- Set sample ingredients as JSON array (adjust based on your products)
    ingredients = COALESCE(
        NULLIF(ingredients, ''), 
        CASE 
            WHEN category LIKE '%almond%' THEN '["Activated Almonds", "Sea Salt", "Natural Spices"]'
            WHEN category LIKE '%fruit%' THEN '["Dehydrated Fruits", "No Added Sugar"]'
            ELSE '["Premium Ingredients"]'
        END
    ),
    
    -- Set sample process notes
    process_notes = COALESCE(
        NULLIF(process_notes, ''), 
        '["Carefully selected ingredients", "Premium processing", "Quality tested"]'
    ),
    
    -- Set storage instructions
    storage = COALESCE(
        NULLIF(storage, ''), 
        'Store in a cool, dry place. Consume within 6 months of opening.'
    ),
    
    -- Set allergens (adjust based on your products)
    allergens = COALESCE(
        NULLIF(allergens, ''), 
        CASE 
            WHEN category LIKE '%almond%' THEN '["Tree Nuts"]'
            ELSE '[]'
        END
    ),
    
    -- Leave nutrition_pdf as NULL (can be added manually)
    nutrition_pdf = COALESCE(nutrition_pdf, NULL),
    
    -- Set sample badges based on category
    badges = COALESCE(
        NULLIF(badges, ''), 
        CASE 
            WHEN category LIKE '%almond%' THEN '["Activated Almonds", "Premium Quality"]'
            WHEN category LIKE '%fruit%' THEN '["Dehydrated Fruits", "No Added Sugar"]'
            ELSE '["Premium Product"]'
        END
    ),
    
    -- Set sample bullet points
    bullets = COALESCE(
        NULLIF(bullets, ''), 
        '["Premium quality ingredients", "Carefully processed", "Quality tested"]'
    ),
    
    -- Set boolean defaults
    is_provisional_nutrition = COALESCE(is_provisional_nutrition, false),
    featured = COALESCE(featured, false)
WHERE 
    -- Only update rows that have NULL or empty values
    (short_description IS NULL OR short_description = '')
    OR (ingredients IS NULL OR ingredients = '')
    OR (process_notes IS NULL OR process_notes = '')
    OR (storage IS NULL OR storage = '')
    OR (allergens IS NULL OR allergens = '')
    OR (badges IS NULL OR badges = '')
    OR (bullets IS NULL OR bullets = '')
    OR is_provisional_nutrition IS NULL
    OR featured IS NULL;

-- Verify the update
SELECT 
    id,
    name,
    category,
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

