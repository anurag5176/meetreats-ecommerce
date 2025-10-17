import { ProductsHero } from "@/components/features/products/products-hero"
import { CinematicScrollCollection } from "@/components/features/products/cinematic-scroll-collection"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-soft-cream">
      <ProductsHero />
      <CinematicScrollCollection />
    </div>
  )
}

export const metadata = {
  title: "Our Collection - MeeTreats",
  description: "Discover our complete collection of artisanal activated nuts and dehydrated fruits, crafted with clean ingredients and thoughtful care.",
}