"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import type { CartItem as CartItemType } from "@/lib/hooks/use-cart"
import { useCart } from "@/lib/hooks/use-cart"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={item.image || `/placeholder.svg?height=80&width=80&query=${item.name}`}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 min-w-0">
            <Link
              href={`/products/${item.slug}`}
              className="font-semibold text-foreground hover:text-gold-400 transition-colors"
            >
              {item.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{item.weight}g per pack</p>
            <p className="text-lg font-bold text-foreground mt-2">₹{item.price}</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-12 text-center font-medium">{item.quantity}</span>

              <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)} className="text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="font-semibold text-foreground">₹{item.price * item.quantity}</span>
        </div>
      </CardContent>
    </Card>
  )
}
