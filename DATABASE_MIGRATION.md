# Database Migration Guide

## Adding Product Detail Columns

This guide will help you add the new product detail columns to your existing Supabase database.

## Quick Migration

### Option 1: Run the Migration Script (Recommended)

1. Open your Supabase Dashboard
2. Go to **SQL Editor**
3. Copy and paste the contents of `scripts/003-add-product-details-columns.sql`
4. Click **Run** to execute the migration

### Option 2: Manual SQL

Copy and paste this SQL directly into Supabase SQL Editor:

```sql
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
```

## Column Descriptions

| Column | Type | Description |
|--------|------|-------------|
| `short_description` | TEXT | Short tagline/description shown on product page |
| `ingredients` | TEXT | JSON array string of ingredients (e.g., `["Almonds", "Cocoa"]`) |
| `process_notes` | TEXT | JSON array string of process steps |
| `storage` | TEXT | Storage and shelf life instructions |
| `allergens` | TEXT | JSON array string of allergens |
| `nutrition_pdf` | VARCHAR(500) | URL to nutrition information PDF |
| `badges` | TEXT | JSON array string of product badges |
| `bullets` | TEXT | JSON array string of bullet points |
| `is_provisional_nutrition` | BOOLEAN | Whether nutrition info is provisional (default: false) |
| `featured` | BOOLEAN | Whether product is featured (default: false) |

## Data Format

### Array Fields (stored as JSON strings)

The following fields store arrays as JSON strings:
- `ingredients`
- `process_notes`
- `allergens`
- `badges`
- `bullets`

**Example:**
```json
["Activated Almonds", "Organic Jaggery", "Premium Cocoa Powder"]
```

The admin form automatically converts comma-separated values to JSON arrays when saving.

## Step 2: Update Existing Products (Optional)

After adding the columns, you may want to populate them with default values for existing products.

### Option A: Set Empty Defaults (Safe)

Run `scripts/004-update-existing-products.sql` to set empty/JSON array defaults:

```sql
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
```

### Option B: Set Sample Data (For Testing)

Run `scripts/004-update-existing-products-with-sample-data.sql` to populate with sample data based on product categories.

**⚠️ Warning**: This will overwrite NULL values with sample data. Only use if you want to see example data.

## Verification

After running the migration, verify the columns were added:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'products'
ORDER BY ordinal_position;
```

You should see all the new columns listed.

## Rollback (if needed)

If you need to remove these columns (not recommended after data is added):

```sql
ALTER TABLE products 
DROP COLUMN IF EXISTS short_description,
DROP COLUMN IF EXISTS ingredients,
DROP COLUMN IF EXISTS process_notes,
DROP COLUMN IF EXISTS storage,
DROP COLUMN IF EXISTS allergens,
DROP COLUMN IF EXISTS nutrition_pdf,
DROP COLUMN IF EXISTS badges,
DROP COLUMN IF EXISTS bullets,
DROP COLUMN IF EXISTS is_provisional_nutrition,
DROP COLUMN IF EXISTS featured;
```

## Notes

- The `IF NOT EXISTS` clause ensures the migration is safe to run multiple times
- Existing products will have `NULL` values for new columns (which is fine)
- Default values are set for boolean fields (`false`)
- All new columns are nullable, so existing data won't break

