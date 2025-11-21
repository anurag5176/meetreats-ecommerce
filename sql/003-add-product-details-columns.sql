-- Migration: Add product detail columns to products table
-- Run this in your Supabase SQL Editor

-- Add new columns to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS short_description TEXT,
ADD COLUMN IF NOT EXISTS ingredients TEXT,
ADD COLUMN IF NOT EXISTS process_notes TEXT,
ADD COLUMN IF NOT EXISTS storage TEXT,
ADD COLUMN IF NOT EXISTS allergens TEXT,
ADD COLUMN IF NOT EXISTS nutrition_pdf VARCHAR(500),
ADD COLUMN IF NOT EXISTS badges TEXT,
ADD COLUMN IF NOT EXISTS bullets TEXT,
ADD COLUMN IF NOT EXISTS is_provisional_nutrition BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Add comments for documentation
COMMENT ON COLUMN products.short_description IS 'Short tagline/description shown on product page';
COMMENT ON COLUMN products.ingredients IS 'JSON array string of ingredients';
COMMENT ON COLUMN products.process_notes IS 'JSON array string of process steps';
COMMENT ON COLUMN products.storage IS 'Storage and shelf life instructions';
COMMENT ON COLUMN products.allergens IS 'JSON array string of allergens';
COMMENT ON COLUMN products.nutrition_pdf IS 'URL to nutrition information PDF';
COMMENT ON COLUMN products.badges IS 'JSON array string of product badges';
COMMENT ON COLUMN products.bullets IS 'JSON array string of bullet points';
COMMENT ON COLUMN products.is_provisional_nutrition IS 'Whether nutrition info is provisional';
COMMENT ON COLUMN products.featured IS 'Whether product is featured';

