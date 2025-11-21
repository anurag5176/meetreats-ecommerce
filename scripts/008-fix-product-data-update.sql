-- Step 1: First verify the columns exist
-- Run this to check if columns were added:
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'products' 
AND column_name IN (
    'short_description', 
    'ingredients', 
    'process_notes', 
    'storage', 
    'allergens', 
    'badges', 
    'bullets',
    'is_provisional_nutrition',
    'featured'
)
ORDER BY column_name;

-- Step 2: Check what products you actually have
SELECT id, name, slug FROM products ORDER BY id;

-- Step 3: Update ALL products by ID (replace IDs with your actual product IDs)
-- This is the safest way - update by ID instead of slug/name

-- Example for product with ID 1 (Cocoa Cloud Crunch)
UPDATE products
SET 
    short_description = 'A little cloud. A lot of cocoa.',
    description = 'Lightly crunchy. Deeply satisfying. Activated almonds enrobed in rich dark chocolate — the perfect clean pick-me-up.',
    ingredients = '["Activated Almonds", "Organic Jaggery", "Premium Cocoa Powder", "Sea Salt"]',
    process_notes = '["Soaked for 12 hours", "Dehydrated at 65°C", "Nitrogen flush sealed"]',
    storage = 'Store in a cool, dry place. Consume within 6 months of opening.',
    allergens = '["Tree Nuts"]',
    badges = '["Activated Almonds", "Dark Chocolate Coated"]',
    bullets = '["Activated almonds for better digestibility", "Natural jaggery sweetening", "Premium cocoa coating", "No artificial preservatives", "Gluten-free and vegan"]',
    is_provisional_nutrition = false,
    featured = true
WHERE id = 1;  -- CHANGE THIS ID to match your actual product ID

-- After running Step 2, you'll see your product IDs
-- Then update each product by replacing the WHERE id = X with your actual IDs

