import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/features/products/product-card"
import { getFeaturedProducts } from "@/lib/data/products"

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-soft-cream">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="satisfy-regular text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4 sm:mb-6 paisley-separator px-4">Featured Products</h2>
          <p className="text-base sm:text-lg text-warm-taupe max-w-3xl mx-auto leading-relaxed px-4">
            Discover our most popular clean-label snacks, crafted with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="btn-gold-outline px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
