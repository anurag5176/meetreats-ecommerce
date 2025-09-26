import { ProductCard } from "./product-card"
import { getAllProducts, getProductsByCategory } from "@/lib/data/products"

interface ProductsGridProps {
  searchParams: {
    category?: string
    sort?: string
    search?: string
  }
}

export async function ProductsGrid({ searchParams }: ProductsGridProps) {
  let products = await getAllProducts()

  // Filter by category
  if (searchParams.category && searchParams.category !== "all") {
    products = await getProductsByCategory(searchParams.category)
  }

  // Filter by search
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase()
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) || product.shortDescription.toLowerCase().includes(searchTerm),
    )
  }

  // Sort products
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "price-asc":
        products.sort((a, b) => a.priceINR - b.priceINR)
        break
      case "price-desc":
        products.sort((a, b) => b.priceINR - a.priceINR)
        break
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Default to featured first, then by name
        products.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.name.localeCompare(b.name)
        })
    }
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
