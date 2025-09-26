"use client"

import { useCart } from "@/lib/hooks/use-cart"
import { CartItem } from "./cart-item"
import { CartSummary } from "./cart-summary"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  const { items } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="p-6 rounded-full bg-royal-gold/10 w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-royal-gold/20">
          <ShoppingBag className="h-12 w-12 text-royal-gold" />
        </div>
        <h2 className="satisfy-regular text-4xl text-charcoal mb-6">Your cart is empty</h2>
        <p className="text-lg text-warm-taupe mb-10 max-w-md mx-auto">Add some delicious snacks to get started!</p>
        <Button asChild className="btn-plum px-8 py-4 text-lg">
          <Link href="/products">Shop Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  )
}
