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
    id: "2",
    slug: "matcha-muse-bites",
    name: "Matcha Muse Bites",
    category: "activated-almonds",
    priceINR: 520,
    weightGrams: 150,
    shortDescription: "Japanese matcha powder dusts premium activated almonds",
    description:
      "Authentic Japanese matcha meets our signature activated almonds. The earthy, umami-rich flavor of ceremonial-grade matcha creates a sophisticated snacking experience.",
    bullets: [
      "Ceremonial-grade Japanese matcha",
      "Activated almonds base",
      "Rich in antioxidants",
      "Natural energy boost",
      "Artisanal small batches",
    ],
    images: ["/matcha-almonds-green.jpg"],
    badges: ["Antioxidant Rich", "Premium"],
    ingredients: ["Activated Almonds", "Japanese Matcha Powder", "Coconut Sugar", "Sea Salt"],
    processNotes: ["Cold-pressed matcha application", "Temperature controlled at 60°C"],
    storage: "Store away from direct sunlight. Best consumed within 4 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    slug: "tuscan-herb-twist",
    name: "Tuscan Herb Twist",
    category: "activated-almonds",
    priceINR: 480,
    weightGrams: 150,
    shortDescription: "Italian herbs and spices transform activated almonds into a savory delight",
    description:
      "Inspired by the rolling hills of Tuscany, these activated almonds are seasoned with a blend of Italian herbs including rosemary, thyme, and oregano.",
    bullets: [
      "Authentic Italian herb blend",
      "Savory snacking option",
      "Perfect with wine",
      "No artificial flavors",
      "Keto-friendly",
    ],
    images: ["/herb-seasoned-almonds.jpg"],
    badges: ["Keto Friendly", "Savory"],
    ingredients: ["Activated Almonds", "Rosemary", "Thyme", "Oregano", "Garlic Powder", "Sea Salt", "Olive Oil"],
    processNotes: ["Herb infusion at low temperature", "Double-seasoning process"],
    storage: "Store in airtight container. Consume within 5 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    slug: "amber-aura-crunch",
    name: "Amber Aura Crunch",
    category: "activated-almonds",
    priceINR: 490,
    weightGrams: 150,
    shortDescription: "Warm spices create an aromatic experience with every bite",
    description:
      "A mystical blend of warming spices including cinnamon, cardamom, and a hint of black pepper creates an enchanting flavor profile.",
    bullets: ["Warming spice blend", "Aromatic experience", "Digestive spices", "Mood-enhancing", "Ayurvedic inspired"],
    images: ["/spiced-almonds-golden.jpg"],
    badges: ["Ayurvedic", "Warming"],
    ingredients: ["Activated Almonds", "Ceylon Cinnamon", "Green Cardamom", "Black Pepper", "Nutmeg", "Jaggery"],
    processNotes: ["Spice tempering technique", "Slow infusion process"],
    storage: "Store in cool, dry place. Best within 6 months.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    slug: "chai-spice-crunch",
    name: "Chai Spice Crunch",
    category: "activated-almonds",
    priceINR: 460,
    weightGrams: 150,
    shortDescription: "Classic Indian chai spices meet premium activated almonds",
    description:
      "The beloved flavors of Indian chai - cardamom, ginger, cloves, and cinnamon - perfectly complement our activated almonds.",
    bullets: [
      "Traditional chai spices",
      "Nostalgic flavors",
      "Digestive benefits",
      "Perfect with tea",
      "Indian heritage",
    ],
    images: ["/chai-spiced-almonds.jpg"],
    badges: ["Traditional", "Digestive"],
    ingredients: ["Activated Almonds", "Cardamom", "Ginger", "Cloves", "Cinnamon", "Black Tea Extract", "Jaggery"],
    processNotes: ["Traditional spice grinding", "Tea essence infusion"],
    storage: "Store in airtight container away from moisture.",
    allergens: ["Tree Nuts"],
    isProvisionalNutrition: false,
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    slug: "plum-dust-bites",
    name: "Plum Dust Bites",
    category: "dehydrated-fruits",
    priceINR: 380,
    weightGrams: 100,
    shortDescription: "Java plum (Jamun) dehydrated to perfection with natural sweetness",
    description:
      "Rare Java plums, also known as Jamun, are carefully dehydrated to concentrate their unique sweet-tart flavor and deep purple color.",
    bullets: [
      "Rare Java plum variety",
      "Rich in antioxidants",
      "Natural purple color",
      "Sweet-tart flavor",
      "Traditional superfruit",
    ],
    images: ["/dried-jamun-plums-purple.jpg"],
    badges: ["Superfruit", "Antioxidant Rich"],
    ingredients: ["Java Plum (Jamun)", "Natural Fruit Sugars"],
    processNotes: ["Slow dehydration at 55°C", "No added sugars"],
    storage: "Store in cool, dry place. Consume within 8 months.",
    allergens: [],
    isProvisionalNutrition: true,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    slug: "ruby-blush-bites",
    name: "Ruby Blush Bites",
    category: "dehydrated-fruits",
    priceINR: 420,
    weightGrams: 100,
    shortDescription: "Premium strawberries dehydrated to intensify their natural sweetness",
    description:
      "Hand-selected premium strawberries are gently dehydrated to create chewy, intensely flavored bites that capture summer in every piece.",
    bullets: [
      "Premium strawberry variety",
      "Intense natural flavor",
      "Chewy texture",
      "No artificial colors",
      "Vitamin C rich",
    ],
    images: ["/dried-strawberries-red.jpg"],
    badges: ["Vitamin C", "Premium"],
    ingredients: ["Premium Strawberries", "Natural Fruit Sugars"],
    processNotes: ["Hand-selected fruits", "Gentle dehydration process"],
    storage: "Store in airtight container. Best consumed within 6 months.",
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
