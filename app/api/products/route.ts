import { type NextRequest, NextResponse } from "next/server"
import { products } from "@/lib/data/products"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  const sort = searchParams.get("sort")

  let filteredProducts = [...products]

  // Filter by category
  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
    )
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Keep original order
        break
    }
  }

  return NextResponse.json({
    success: true,
    data: filteredProducts,
    total: filteredProducts.length,
  })
}
