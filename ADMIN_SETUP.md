# Admin Dashboard Setup Guide

## Overview

The MeeTreats Admin Dashboard is a premium, intuitive interface for managing your e-commerce operations. It's designed for non-technical users with a clean, luxury aesthetic that matches your brand.

## Features

- 📊 **Dashboard Overview**: Real-time metrics (New Orders, Low Stock Alerts, Today's Sales, Pending Shipments)
- 📦 **Product Management**: Full CRUD operations with visual product grid, inline stock editing, and availability toggles
- 🛒 **Order Management**: Status updates, order details, and customer information
- 🔐 **Secure Authentication**: Supabase Auth integration
- 🎨 **Brand-Aligned Design**: Deep Muted Brown (#2a1914) and Rich Gold (#D4AF37) color scheme

## Prerequisites

1. Supabase account and project
2. Environment variables configured

## Supabase Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Database Schema

Run the following SQL in your Supabase SQL Editor to create the required tables:

```sql
-- Products table (if not already exists)
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    weight INTEGER NOT NULL,
    stock INTEGER,
    in_stock BOOLEAN DEFAULT true,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table (if not already exists)
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(50) UNIQUE NOT NULL,
    customer_info JSONB NOT NULL,
    items JSONB NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_info JSONB,
    status VARCHAR(50) DEFAULT 'pending',
    timeline JSONB,
    estimated_delivery TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
-- Note: Adjust these policies based on your authentication setup
CREATE POLICY "Admin can read products" ON products FOR SELECT USING (true);
CREATE POLICY "Admin can insert products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update products" ON products FOR UPDATE USING (true);
CREATE POLICY "Admin can delete products" ON products FOR DELETE USING (true);

CREATE POLICY "Admin can read orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Admin can update orders" ON orders FOR UPDATE USING (true);
```

### 3. Set Up Authentication

1. In Supabase Dashboard, go to **Authentication** > **Users**
2. Create an admin user manually or enable email signup
3. For production, consider using email magic links or OAuth

### 4. Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Important**: 
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are safe to expose (used client-side)
- `SUPABASE_SERVICE_ROLE_KEY` should NEVER be exposed (server-side only)

## Accessing the Admin Dashboard

1. Navigate to `/admin/login` (not linked in navigation - hidden URL)
2. Login with your admin credentials
3. You'll be redirected to `/admin` dashboard

## Admin Routes

- `/admin` - Dashboard overview
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/login` - Login page

## Features in Detail

### Dashboard
- **New Orders**: Count of pending/processing orders
- **Low Stock Alerts**: Products with stock < 10 units
- **Today's Sales**: Total revenue from delivered orders today
- **Pending Shipments**: Orders marked as "shipped"

### Product Management
- **View All Products**: Grid layout with images, prices, stock
- **Add Product**: Form with all product details
- **Edit Product**: Update any product information
- **Stock Management**: 
  - Inline stock number editing
  - Toggle availability (In Stock / Out of Stock)
- **Delete Product**: Remove products from catalog

### Order Management
- **View All Orders**: List with order ID, customer, status, total
- **Status Updates**: Dropdown to change order status:
  - Pending → Processing → Shipped → Delivered
- **Order Details**: Full view of:
  - Customer information
  - Shipping address
  - Order items with quantities
  - Payment information
- **Search**: Filter by order ID, customer name, or email

## Real-Time Updates

All changes made in the admin dashboard are immediately reflected on the public website:
- Product price changes → Updated on product pages
- Stock updates → Cart availability changes
- Out of Stock toggle → "Add to Cart" button hidden
- Order status → Customer can track in real-time

## Security Notes

1. The admin dashboard is **not linked in navigation** - only accessible via direct URL
2. All routes are protected by authentication
3. Use Supabase Row Level Security (RLS) policies for additional security
4. Consider adding IP whitelisting for production
5. Use strong passwords and enable 2FA in Supabase

## Troubleshooting

### "Supabase environment variables are not set"
- Check your `.env.local` file
- Ensure variables are prefixed correctly
- Restart your development server after adding env variables

### "Authentication failed"
- Verify your Supabase project URL and keys
- Check that the user exists in Supabase Auth
- Ensure RLS policies allow your user to access data

### "Failed to fetch products/orders"
- Check Supabase table names match exactly
- Verify RLS policies are set correctly
- Check browser console for specific error messages

## Next Steps

1. Set up email notifications for order status changes
2. Add product image upload functionality
3. Implement bulk operations (bulk stock update, etc.)
4. Add analytics and reporting features
5. Set up automated low-stock alerts via email

