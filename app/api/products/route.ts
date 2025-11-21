import { type NextRequest, NextResponse } from "next/server"
import { getAllProducts } from "@/lib/data/products"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const sort = searchParams.get("sort")

    // Fetch products from Supabase (or fallback to static data)
    let filteredProducts = await getAllProducts()

    // Filter by category
    if (category && category !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) || 
          product.description.toLowerCase().includes(searchLower) ||
          product.shortDescription.toLowerCase().includes(searchLower),
      )
    }

    // Sort products
    if (sort) {
      switch (sort) {
        case "price-low":
        case "price-asc":
          filteredProducts.sort((a, b) => a.priceINR - b.priceINR)
          break
        case "price-high":
        case "price-desc":
          filteredProducts.sort((a, b) => b.priceINR - a.priceINR)
          break
        case "name":
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        default:
          // Default to featured first, then by name
          filteredProducts.sort((a, b) => {
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1
            return a.name.localeCompare(b.name)
          })
          break
      }
    } else {
      // Default to featured first, then by name
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.name.localeCompare(b.name)
      })
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length,
    })
  } catch (error) {
    console.error("Error in products API route:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}
