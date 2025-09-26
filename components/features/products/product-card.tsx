"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/hooks/use-cart"

interface ProductCardProps {
  product: Product
  showPricePer100g?: boolean
}

export function ProductCard({ product, showPricePer100g = false }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceINR,
      weight: product.weightGrams,
      image: product.images[0],
      slug: product.slug,
    })
  }

  const pricePer100g = Math.round((product.priceINR / product.weightGrams) * 100)

  return (
    <Card className="bg-soft-cream border border-royal-gold/20 shadow-medium hover:shadow-large transition-all duration-300 group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0] || `/placeholder.svg?height=300&width=300&query=${product.name}`}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {product.badges.length > 0 && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs bg-deep-plum text-royal-gold font-semibold shadow-medium">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4 sm:p-6">
        <Link href={`/products/${product.slug}`}>
          <h3 className="satisfy-regular text-charcoal mb-2 sm:mb-3 group-hover:text-deep-plum transition-colors line-clamp-2 text-lg sm:text-xl">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm text-warm-taupe mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{product.shortDescription}</p>

        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <span className="text-lg sm:text-xl font-bold text-charcoal font-space-grotesk">₹{product.priceINR}</span>
            <span className="text-xs sm:text-sm text-warm-taupe ml-1 sm:ml-2">({product.weightGrams}g)</span>
            {showPricePer100g && <div className="text-xs text-warm-taupe mt-1 font-space-grotesk">₹{pricePer100g}/100g</div>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full btn-plum text-sm sm:text-base py-2 sm:py-3"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  )
}
