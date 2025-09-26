export interface Product {
  id: string
  slug: string
  name: string
  category: "activated-almonds" | "dehydrated-fruits" | "gifting"
  priceINR: number
  weightGrams: number
  shortDescription: string
  description: string
  bullets: string[]
  images: string[]
  badges: string[]
  ingredients: string[]
  processNotes: string[]
  storage: string
  allergens: string[]
  nutritionPdf?: string
  isProvisionalNutrition: boolean
  inStock: boolean
  featured: boolean
}

export interface Batch {
  code: string
  productId: string
  sealedAt: string
  labReportPdf: string
  notes?: string
}

export interface Order {
  id: string
  razorpayOrderId?: string
  status: "PLACED" | "PAID" | "SHIPPED" | "OUT_FOR_DELIVERY" | "DELIVERED" | "CANCELLED"
  email: string
  phone: string
  address: {
    name: string
    line1: string
    line2?: string
    city: string
    state: string
    pincode: string
  }
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
    weight: number
  }>
  totalINR: number
  createdAt: string
}

export interface CorporateLead {
  id: string
  company: string
  contactName: string
  email: string
  phone: string
  budget: number
  quantity: number
  deliveryWindow: string
  selections: string[]
  createdAt: string
}

export interface HamperPreset {
  slug: string
  name: string
  minBudget: number
  maxBudget: number
  includedSkus: string[]
  description: string
}
