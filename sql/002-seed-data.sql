-- Seed data for MeeTreats

-- Insert products
INSERT INTO products (name, slug, description, category, price, weight, image_url, nutritional_info, batch_info, lab_reports, pairing_suggestions, in_stock) VALUES
('Premium Activated Almonds', 'premium-activated-almonds', 'Hand-picked California almonds, activated for 12 hours and slow-dehydrated to preserve nutrients.', 'Nuts', 899, 250, '/placeholder.svg?height=400&width=400', '{"protein": "21g", "fat": "49g", "carbs": "22g", "fiber": "12g", "calories": "579"}', '{"batchId": "ALM001", "productionDate": "2024-01-10", "expiryDate": "2024-07-10"}', '{"aflatoxin": "Not Detected", "pesticides": "Not Detected", "heavyMetals": "Within Limits"}', '{"Dark chocolate", "Honey", "Fresh fruits"}', true),

('Dehydrated Mango Slices', 'dehydrated-mango-slices', 'Naturally sweet Alphonso mango slices, dehydrated at low temperatures to retain vitamins and flavor.', 'Fruits', 649, 200, '/placeholder.svg?height=400&width=400', '{"vitaminC": "36mg", "sugar": "65g", "fiber": "3g", "calories": "319"}', '{"batchId": "MAN002", "productionDate": "2024-01-15", "expiryDate": "2024-07-15"}', '{"sulfurDioxide": "Not Detected", "pesticides": "Not Detected", "microbial": "Within Limits"}', '{"Yogurt", "Granola", "Trail mix"}', true);

-- Insert sample lab batches
INSERT INTO lab_batches (batch_id, product_name, test_date, status, results) VALUES
('ALM001', 'Premium Activated Almonds', '2024-01-15', 'passed', '{"moisture": "4.2%", "protein": "21.8g/100g", "aflatoxin": "Not Detected", "pesticides": "Not Detected"}'),
('MAN002', 'Dehydrated Mango Slices', '2024-01-20', 'passed', '{"moisture": "18.5%", "vitaminC": "36.4mg/100g", "sulfurDioxide": "Not Detected", "pesticides": "Not Detected"}');
