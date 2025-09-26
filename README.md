# MeeTreats E-commerce Platform

Premium clean-label snacks e-commerce platform with corporate gifting capabilities.

## Features

- 🛍️ Full e-commerce functionality with cart and checkout
- 🎁 Corporate gifting and hamper configurator
- 📱 Responsive design with dark theme
- 🔍 Product catalog with filtering and search
- 📊 Order tracking with OTP verification
- 🧪 Lab reports and batch tracking
- 💳 Razorpay payment integration
- 📧 Email notifications via Postmark
- 💬 WhatsApp Business API integration
- 🎨 Sanity CMS for content management

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Sanity
- **Database**: Supabase (PostgreSQL)
- **Payments**: Razorpay
- **Email**: Postmark
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Sanity account
- Razorpay account (test mode)
- Postmark account

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd meetreats-ecommerce
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Fill in your environment variables in `.env.local`.

4. Set up Supabase database:
\`\`\`bash
# Run the database setup scripts in the scripts/ folder
npm run dev
# Navigate to http://localhost:3000/api/setup-db to initialize tables
\`\`\`

5. Configure Sanity CMS:
\`\`\`bash
# Set up your Sanity project and add the schemas from sanity/schemas/
\`\`\`

6. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions and hooks
├── sanity/              # Sanity CMS configuration
├── supabase/            # Database types and migrations
├── scripts/             # Database setup scripts
└── public/              # Static assets
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## Deployment

The application is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

## CMS Management

### Adding Products

1. Log into your Sanity Studio
2. Navigate to Products
3. Add product details, images, and specifications
4. Publish the product

### Managing Batches

1. Create batch entries with lab reports
2. Link batches to products
3. Set sealed dates for freshness tracking

### Festival Mode

Toggle festival skin in the Promo settings to enable Diwali-themed accents.

## API Endpoints

- `GET /api/products` - List products
- `GET /api/products/[slug]` - Get single product
- `POST /api/contact` - Contact form submission
- `POST /api/corp/lead` - Corporate lead submission
- `POST /api/otp/request` - Request OTP for tracking
- `POST /api/otp/verify` - Verify OTP
- `GET /api/track` - Get order tracking info
- `POST /api/webhooks/razorpay` - Razorpay webhook
- `POST /api/webhooks/shipping` - Shipping webhook

## Performance

The application is optimized for:
- Lighthouse scores ≥90 across all categories
- Zero Cumulative Layout Shift (CLS)
- Fast loading with Next.js optimizations
- Responsive images with next/image

## License

Private - All rights reserved by MeeTreats
