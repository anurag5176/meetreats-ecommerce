-- Migration: Populate existing products with exact static data
-- This updates products by matching their slug OR name with the static product data
-- Run this AFTER running 003-add-product-details-columns.sql

-- First, let's see what products exist in your database
-- Uncomment the line below to check:
-- SELECT id, name, slug, category FROM products ORDER BY id;

-- Cocoa Cloud Crunch (matches by slug OR name)
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
WHERE slug = 'cocoa-jaggery-crunch' OR LOWER(name) LIKE '%cocoa cloud crunch%' OR LOWER(name) LIKE '%cocoa%jaggery%';

-- Plum Dusk Bites (matches by slug OR name)
UPDATE products
SET 
    short_description = 'Real jamun. No nonsense. Just plum magic',
    description = 'Tangy, bold, and unapologetically purple. These gently dried Jamun chunks are kissed with a natural plum dust — tart, rich in antioxidants, and sugar-free. A nostalgic Indian fruit made minimal and modern.',
    ingredients = '["Plum (Jamun)"]',
    process_notes = '["Slow dehydration at 55°C", "No artificial colors"]',
    storage = 'Store in a cool, dry place. Best within 8 months.',
    allergens = '[]',
    badges = '["Java Plum Chunks", "No Added Sugar"]',
    bullets = '["Java Plum Chunks", "Antioxidant-rich", "No added sugar", "Clean ingredients", "Chewy, satisfying bite"]',
    is_provisional_nutrition = true,
    featured = true
WHERE slug = 'plum-dusk-bites' OR LOWER(name) LIKE '%plum dusk%' OR LOWER(name) LIKE '%jamun%' OR LOWER(name) LIKE '%plum%';

-- Tuscan Herbs Twist (matches by slug OR name)
UPDATE products
SET 
    short_description = 'Rustic. Modern. Very snackable.',
    description = 'Almonds that taste like a Mediterranean escape. Tossed in aromatic Italian herbs and slow-baked for flavor that lingers.',
    ingredients = '["Activated Almonds", "Rosemary", "Thyme", "Pink Salt", "Olive Oil"]',
    process_notes = '["Herb infusion at low temperature", "Dehydrated at 60°C"]',
    storage = 'Store in a cool, dry place. Best within 6 months.',
    allergens = '["Tree Nuts"]',
    badges = '["No Preservatives", "Italian Herb Blend"]',
    bullets = '["Activated for digestibility", "Herbaceous, savory finish", "No artificial flavors", "Small-batch crafted", "Gluten-free and vegan"]',
    is_provisional_nutrition = false,
    featured = false
WHERE slug = 'herb-seasoned-symphony' OR LOWER(name) LIKE '%tuscan herbs%' OR LOWER(name) LIKE '%herb%seasoned%' OR LOWER(name) LIKE '%herb%';

-- Amber Aura Crunch (matches by slug OR name)
UPDATE products
SET 
    short_description = 'Golden spice. Gentle soul. Pure aura.',
    description = 'Warm, golden, and quietly bold. Activated almonds infused with cinnamon, clove, and cardamom — a calm indulgence in every bite. Where purity meets grace, and flavour glows within.',
    ingredients = '["Activated Almonds", "Turmeric", "Black Pepper", "Coconut Sugar", "Sea Salt"]',
    process_notes = '["Spice bloom at controlled heat", "Gentle dehydration"]',
    storage = 'Keep airtight. Consume within 6 months.',
    allergens = '["Tree Nuts"]',
    badges = '["Ayurvedic", "Spiced Infusion"]',
    bullets = '["Turmeric + black pepper synergy", "Activated almond base", "Warm, earthy flavor", "Air-dried for crunch", "Ayurvedic inspired"]',
    is_provisional_nutrition = false,
    featured = false
WHERE slug = 'golden-almond-medley' OR LOWER(name) LIKE '%amber aura%' OR LOWER(name) LIKE '%golden%almond%' OR LOWER(name) LIKE '%chai%spiced%';

-- Matcha Muse Bites (matches by slug OR name)
UPDATE products
SET 
    short_description = 'Focused. Flavorful. Fantastically green.',
    description = 'Earthy meets elevated. These crisp, activated almonds are coated in ceremonial-grade matcha for a clean, calm crunch.',
    ingredients = '["Activated Almonds", "Japanese Matcha Powder", "Coconut Sugar", "Sea Salt"]',
    process_notes = '["Cold matcha dusting", "Dehydrated at 60°C"]',
    storage = 'Store away from heat and moisture. Best within 4 months.',
    allergens = '["Tree Nuts"]',
    badges = '["Infused with Japanese Matcha", "Activated Almonds"]',
    bullets = '["Ceremonial-grade matcha", "Activated for digestibility", "Umami-rich, clean finish", "Antioxidant dense", "Small-batch crafted"]',
    is_provisional_nutrition = false,
    featured = true
WHERE slug = 'matcha-green-delight' OR LOWER(name) LIKE '%matcha muse%' OR LOWER(name) LIKE '%matcha%';

-- Ruby Blush Bites (matches by slug OR name)
UPDATE products
SET 
    short_description = 'Just enough sugar. Just enough sass.',
    description = 'Strawberries, reimagined. Lightly candied, these luscious ruby-red bites are sweet, juicy, and unapologetically luxe. Perfect for when health meets a little indulgence.',
    ingredients = '["Premium Strawberries"]',
    process_notes = '["Gentle dehydration at 55°C", "No added sugar"]',
    storage = 'Store in an airtight container. Best within 6 months.',
    allergens = '[]',
    badges = '["Candied Strawberries", "Contains Natural Sugar"]',
    bullets = '["Naturally sweet, no added colors", "Chewy, satisfying texture", "Source of Vitamin C", "Kid-friendly snack", "Clean ingredients"]',
    is_provisional_nutrition = true,
    featured = true
WHERE slug = 'strawberry-sunset' OR LOWER(name) LIKE '%ruby blush%' OR LOWER(name) LIKE '%strawberry%';

-- Verify the updates
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
