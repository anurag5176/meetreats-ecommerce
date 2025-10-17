import type { Product, Batch } from "@/lib/types"

// Mock product data - in production this would come from Sanity CMS
export const products: Product[] = [
  {
    id: "1",
    slug: "cocoa-jaggery-crunch",
    name: "Cocoa Jaggery Crunch",
    category: "activated-almonds",
    priceINR: 450,
    weightGrams: 150,
    shortDescription: "Rich cocoa meets natural jaggery sweetness in perfectly activated almonds",
    description:
      "Our signature activated almonds infused with premium cocoa and organic jaggery. Each almond is carefully soaked, activated, and dehydrated at low temperatures to preserve nutrients while creating an irresistible crunch.",
    bullets: [
      "Activated almonds for better digestibility",
      "Natural jaggery sweetening",
      "Premium cocoa coating",
      "No artificial preservatives",
      "Gluten-free and vegan",
    ],
    images: ["/cocoa-almonds.jpg"],
    badges: ["No Preservatives", "Gluten Free"],
    ingredients: ["Activated Almonds", "Organic Jaggery", "Premium Cocoa Powder", "Sea Salt"],
    processNotes: ["Soaked for 12 hours", "Dehydrated at 65°C", "Nitrogen flush sealed"],
    storage: "Store in a cool, dry place. Consume within 6 months of opening.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    slug: "plum-dusk-bites",
    name: "Plum Dusk Bites",
    category: "dehydrated-fruits",
    priceINR: 380,
    weightGrams: 100,
    shortDescription: "Dehydrated plum pieces with a bright sweet-tart finish",
    description:
      "Carefully dehydrated plum pieces that concentrate natural sweetness and tang, delivering a chewy texture and rich, dusky hue.",
    bullets: [
      "Sweet-tart balance",
      "Antioxidant-rich",
      "No added sugar",
      "Clean ingredients",
      "Chewy, satisfying bite",
    ],
    images: ["/dried-jamun-plums-purple.jpg"],
    badges: ["Superfruit", "Antioxidant Rich"],
    ingredients: ["Plum (Jamun)"],
    processNotes: ["Slow dehydration at 55°C", "No artificial colors"],
    storage: "Store in a cool, dry place. Best within 8 months.",
    allergens: [],
    isProvisionalNutrition: true,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    slug: "herb-seasoned-symphony",
    name: "Herb Seasoned Symphony",
    category: "activated-almonds",
    priceINR: 400,
    weightGrams: 150,
    shortDescription: "Aromatic herbs elevate perfectly activated almonds",
    description:
      "A carefully balanced medley of rosemary, thyme, and pink salt coats our signature activated almonds for a refined savory profile.",
    bullets: [
      "Activated for digestibility",
      "Herbaceous, savory finish",
      "No artificial flavors",
      "Small-batch crafted",
      "Gluten-free and vegan",
    ],
    images: ["/herb-seasoned-almonds.jpg"],
    badges: ["No Preservatives", "Premium"],
    ingredients: ["Activated Almonds", "Rosemary", "Thyme", "Pink Salt", "Olive Oil"],
    processNotes: ["Herb infusion at low temperature", "Dehydrated at 60°C"],
    storage: "Store in a cool, dry place. Best within 6 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    slug: "golden-almond-medley",
    name: "Golden Almond Medley",
    category: "activated-almonds",
    priceINR: 420,
    weightGrams: 150,
    shortDescription: "Turmeric and black pepper for a warm, golden crunch",
    description:
      "Ancient spices meet modern technique: turmeric and a hint of black pepper over activated almonds for a comforting, earthy bite.",
    bullets: [
      "Turmeric + black pepper synergy",
      "Activated almond base",
      "Warm, earthy flavor",
      "Air-dried for crunch",
      "Ayurvedic inspired",
    ],
    images: ["/chai-spiced-almonds.jpg"],
    badges: ["Ayurvedic", "Warming"],
    ingredients: ["Activated Almonds", "Turmeric", "Black Pepper", "Coconut Sugar", "Sea Salt"],
    processNotes: ["Spice bloom at controlled heat", "Gentle dehydration"],
    storage: "Keep airtight. Consume within 6 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    slug: "matcha-green-delight",
    name: "Matcha Green Delight",
    category: "activated-almonds",
    priceINR: 480,
    weightGrams: 150,
    shortDescription: "Ceremonial matcha meets crisp activated almonds",
    description:
      "Ceremonial-grade matcha gently coats our signature activated almonds for a clean, umami-forward crunch with natural energy.",
    bullets: [
      "Ceremonial-grade matcha",
      "Activated for digestibility",
      "Umami-rich, clean finish",
      "Antioxidant dense",
      "Small-batch crafted",
    ],
    images: ["/matcha-almonds-green.jpg"],
    badges: ["Antioxidant Rich", "Premium"],
    ingredients: ["Activated Almonds", "Japanese Matcha Powder", "Coconut Sugar", "Sea Salt"],
    processNotes: ["Cold matcha dusting", "Dehydrated at 60°C"],
    storage: "Store away from heat and moisture. Best within 4 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: true,
  },
  {
    id: "11",
    slug: "strawberry-sunset",
    name: "Strawberry Sunset",
    category: "dehydrated-fruits",
    priceINR: 350,
    weightGrams: 100,
    shortDescription: "Dehydrated strawberries with a bright, natural sweetness",
    description:
      "Sun-ripened strawberries gently dehydrated to intensify natural sweetness and aroma while keeping a satisfyingly chewy bite.",
    bullets: [
      "Naturally sweet, no added colors",
      "Chewy, satisfying texture",
      "Source of Vitamin C",
      "Kid-friendly snack",
      "Clean ingredients",
    ],
    images: ["/dried-strawberries-red.jpg"],
    badges: ["Vitamin C", "Premium"],
    ingredients: ["Premium Strawberries"],
    processNotes: ["Gentle dehydration at 55°C", "No added sugar"],
    storage: "Store in an airtight container. Best within 6 months.",
    allergens: [],
    isProvisionalNutrition: true,
    inStock: true,
    featured: true,
  },
]

export const batches: Batch[] = [
  {
    code: "A25-001",
    productId: "1",
    sealedAt: "2025-01-15T10:30:00Z",
    labReportPdf: "/lab-reports/A25-001.pdf",
    notes: "Premium batch with enhanced cocoa content",
  },
  {
    code: "A25-002",
    productId: "2",
    sealedAt: "2025-01-14T14:20:00Z",
    labReportPdf: "/lab-reports/A25-002.pdf",
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // In production, this would fetch from Sanity CMS
  return products
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((product) => product.featured)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const allProducts = await getAllProducts()
  return allProducts.find((product) => product.slug === slug) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((product) => product.category === category)
}

export async function getBatchByProductId(productId: string): Promise<Batch | null> {
  return batches.find((batch) => batch.productId === productId) || null
}
