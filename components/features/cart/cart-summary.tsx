"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/hooks/use-cart"
import { CheckoutDialog } from "./checkout-dialog"
import { Gift, Truck, Star } from "lucide-react"

const VALUE_TIERS = [
  { threshold: 999, perk: "Free shipping", icon: Truck },
  { threshold: 1499, perk: "Free gift wrapping", icon: Gift },
  { threshold: 1999, perk: "Priority support", icon: Star },
]

export function CartSummary() {
  const { items, getTotalPrice } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 999 ? 0 : 99
  const total = subtotal + shipping

  const nextTier = VALUE_TIERS.find((tier) => subtotal < tier.threshold)
  const unlockedPerks = VALUE_TIERS.filter((tier) => subtotal >= tier.threshold)

  return (
    <>
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal ({items.length} items)</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Value Ladder */}
          {nextTier && (
            <div className="bg-gold-600/10 border border-gold-400/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <nextTier.icon className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-medium">
                  Add ₹{nextTier.threshold - subtotal} more for {nextTier.perk}
                </span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-gold-400 h-2 rounded-full transition-all"
                  style={{ width: `${(subtotal / nextTier.threshold) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Unlocked Perks */}
          {unlockedPerks.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Unlocked perks:</p>
              {unlockedPerks.map((perk) => (
                <Badge key={perk.threshold} variant="secondary" className="bg-gold-600/20 text-gold-400">
                  <perk.icon className="h-3 w-3 mr-1" />
                  {perk.perk}
                </Badge>
              ))}
            </div>
          )}

          <Button
            className="w-full bg-gold-600 hover:bg-gold-400 text-brand-900 font-semibold"
            size="lg"
            onClick={() => setIsCheckoutOpen(true)}
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Secure checkout powered by Razorpay. Your payment information is encrypted and secure.
          </p>
        </CardContent>
      </Card>

      <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
    </>
  )
}
