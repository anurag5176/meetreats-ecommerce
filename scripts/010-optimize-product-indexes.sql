-- Performance Optimization: Add indexes for faster product queries
-- Run this in your Supabase SQL Editor

-- Index for in_stock filter (used in getAllProducts)
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock) WHERE in_stock = true;

-- Index for featured products (used in getFeaturedProducts)
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured) WHERE featured = true;

-- Composite index for common query pattern (in_stock + category)
CREATE INDEX IF NOT EXISTS idx_products_in_stock_category ON products(in_stock, category) WHERE in_stock = true;

-- Index for slug lookups (already exists but ensuring it's optimized)
CREATE INDEX IF NOT EXISTS idx_products_slug_unique ON products(slug);

-- Index for created_at sorting (used in getAllProducts order by)
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- Composite index for featured + in_stock + created_at (common query)
CREATE INDEX IF NOT EXISTS idx_products_featured_stock_created ON products(featured, in_stock, created_at DESC) WHERE in_stock = true;

-- Analyze tables to update statistics
ANALYZE products;

-- Verify indexes were created
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'products'
ORDER BY indexname;

