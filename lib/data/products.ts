import type { Product, Batch } from "@/lib/types"
import { supabaseServer } from "@/lib/supabase/server"

// Mock product data - in production this would come from Sanity CMS
export const products: Product[] = [
  {
    id: "1",
    slug: "cocoa-jaggery-crunch",
    name: "Cocoa Cloud Crunch",
    category: "activated-almonds",
    priceINR: 450,
    weightGrams: 150,
    shortDescription: "A little cloud. A lot of cocoa.",
    description:
      "Lightly crunchy. Deeply satisfying. Activated almonds enrobed in rich dark chocolate — the perfect clean pick-me-up.",
    bullets: [
      "Activated almonds for better digestibility",
      "Natural jaggery sweetening",
      "Premium cocoa coating",
      "No artificial preservatives",
      "Gluten-free and vegan",
    ],
    images: ["/cocoa-almonds.jpg"],
    badges: ["Activated Almonds", "Dark Chocolate Coated"],
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
    shortDescription: "Real jamun. No nonsense. Just plum magic",
    description:
      "Tangy, bold, and unapologetically purple. These gently dried Jamun chunks are kissed with a natural plum dust — tart, rich in antioxidants, and sugar-free. A nostalgic Indian fruit made minimal and modern.",
    bullets: [
      "Java Plum Chunks",
      "Antioxidant-rich",
      "No added sugar",
      "Clean ingredients",
      "Chewy, satisfying bite",
    ],
    images: ["/dried-jamun-plums-purple.jpg"],
    badges: ["Java Plum Chunks", "No Added Sugar"],
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
    name: "Tuscan Herbs Twist",
    category: "activated-almonds",
    priceINR: 400,
    weightGrams: 150,
    shortDescription: "Rustic. Modern. Very snackable.",
    description:
      "Almonds that taste like a Mediterranean escape. Tossed in aromatic Italian herbs and slow-baked for flavor that lingers.",
    bullets: [
      "Activated for digestibility",
      "Herbaceous, savory finish",
      "No artificial flavors",
      "Small-batch crafted",
      "Gluten-free and vegan",
    ],
    images: ["/herb-seasoned-almonds.jpg"],
    badges: ["No Preservatives", "Italian Herb Blend"],
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
    name: "Amber Aura Crunch",
    category: "activated-almonds",
    priceINR: 420,
    weightGrams: 150,
    shortDescription: "Golden spice. Gentle soul. Pure aura.",
    description:
      "Warm, golden, and quietly bold. Activated almonds infused with cinnamon, clove, and cardamom — a calm indulgence in every bite. Where purity meets grace, and flavour glows within.",

    bullets: [
      "Turmeric + black pepper synergy",
      "Activated almond base",
      "Warm, earthy flavor",
      "Air-dried for crunch",
      "Ayurvedic inspired",
    ],
    images: ["/chai-spiced-almonds.jpg"],
    badges: ["Ayurvedic", "Spiced Infusion"],
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
    name: "Matcha Muse Bites",
    category: "activated-almonds",
    priceINR: 480,
    weightGrams: 150,
    shortDescription: "Focused. Flavorful. Fantastically green.",
    description:
      "Earthy meets elevated. These crisp, activated almonds are coated in ceremonial-grade matcha for a clean, calm crunch.",
    bullets: [
      "Ceremonial-grade matcha",
      "Activated for digestibility",
      "Umami-rich, clean finish",
      "Antioxidant dense",
      "Small-batch crafted",
    ],
    images: ["/matcha-almonds-green.jpg"],
    badges: ["Infused with Japanese Matcha", "Activated Almonds"],
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
    name: "Ruby Blush Bites",
    category: "dehydrated-fruits",
    priceINR: 350,
    weightGrams: 100,
    shortDescription: "Just enough sugar. Just enough sass.",
    description:
      "Strawberries, reimagined. Lightly candied, these luscious ruby-red bites are sweet, juicy, and unapologetically luxe. Perfect for when health meets a little indulgence.",
    bullets: [
      "Naturally sweet, no added colors",
      "Chewy, satisfying texture",
      "Source of Vitamin C",
      "Kid-friendly snack",
      "Clean ingredients",
    ],
    images: ["/dried-strawberries-red.jpg"],
    badges: ["Candied Strawberries", "Contains Natural Sugar"],
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

// Helper function to parse JSON array string to array
function parseJsonArray(jsonStr: string | null | undefined): string[] {
  if (!jsonStr) return [];
  try {
    const parsed = JSON.parse(jsonStr);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Transform Supabase product to frontend Product format
function transformSupabaseProduct(dbProduct: any): Product {
  return {
    id: dbProduct.id.toString(),
    slug: dbProduct.slug || dbProduct.name.toLowerCase().replace(/\s+/g, "-"),
    name: dbProduct.name,
    category: dbProduct.category as "activated-almonds" | "dehydrated-fruits" | "gifting",
    priceINR: dbProduct.price || 0,
    weightGrams: dbProduct.weight || 0,
    shortDescription: dbProduct.short_description || dbProduct.description || "",
    description: dbProduct.description || "",
    bullets: parseJsonArray(dbProduct.bullets),
    images: dbProduct.image_url ? [dbProduct.image_url] : [], // Convert image_url to images array
    badges: parseJsonArray(dbProduct.badges),
    ingredients: parseJsonArray(dbProduct.ingredients),
    processNotes: parseJsonArray(dbProduct.process_notes),
    storage: dbProduct.storage || "",
    allergens: parseJsonArray(dbProduct.allergens),
    nutritionPdf: dbProduct.nutrition_pdf || undefined,
    isProvisionalNutrition: dbProduct.is_provisional_nutrition ?? false,
    inStock: dbProduct.in_stock ?? true,
    featured: dbProduct.featured ?? false,
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    // Try to fetch from Supabase first
    const { data, error } = await supabaseServer
      .from("products")
      .select("*")
      .eq("in_stock", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products from Supabase:", error)
      // Fallback to static data if Supabase fails
      return products
    }

    if (data && data.length > 0) {
      // Transform Supabase products to frontend format
      return data.map(transformSupabaseProduct)
    }

    // If no products in Supabase, fallback to static data
    return products
  } catch (error) {
    console.error("Error in getAllProducts:", error)
    // Fallback to static data
    return products
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((product) => product.featured)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    // Try to fetch from Supabase first
    const { data, error } = await supabaseServer
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single()

    if (error) {
      console.error("Error fetching product from Supabase:", error)
      // Fallback to static data
      const allProducts = await getAllProducts()
      return allProducts.find((product) => product.slug === slug) || null
    }

    if (data) {
      return transformSupabaseProduct(data)
    }

    // Fallback to static data
    const allProducts = await getAllProducts()
    return allProducts.find((product) => product.slug === slug) || null
  } catch (error) {
    console.error("Error in getProductBySlug:", error)
    // Fallback to static data
    const allProducts = await getAllProducts()
    return allProducts.find((product) => product.slug === slug) || null
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const allProducts = await getAllProducts()
  return allProducts.filter((product) => product.category === category)
}

export async function getBatchByProductId(productId: string): Promise<Batch | null> {
  return batches.find((batch) => batch.productId === productId) || null
}
