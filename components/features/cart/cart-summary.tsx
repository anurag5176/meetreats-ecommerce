"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/hooks/use-cart";
import { CheckoutDialog } from "./checkout-dialog";
import { Gift, Truck, Star } from "lucide-react";

const VALUE_TIERS = [
  { threshold: 999, perk: "Free shipping", icon: Truck },
  { threshold: 1499, perk: "Free gift wrapping", icon: Gift },
  { threshold: 1999, perk: "Priority support", icon: Star },
];

export function CartSummary() {
  const { items, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const nextTier = VALUE_TIERS.find((tier) => subtotal < tier.threshold);
  const unlockedPerks = VALUE_TIERS.filter(
    (tier) => subtotal >= tier.threshold
  );

  return (
    <>
      <Card className="sticky top-24 bg-transparent border-0 shadow-none">
        <CardHeader>
          <CardTitle className="cormorant-garamond text-2xl text-dark-chocolate">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="montserrat text-sm text-warm-taupe">
              Subtotal ({items.length} items)
            </span>
            <span className="montserrat text-lg text-dark-chocolate">
              ₹{subtotal}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="montserrat text-sm text-warm-taupe">Shipping</span>
            <span className="cormorant-garamond text-lg text-dark-chocolate">
              {shipping === 0 ? "Free" : `₹${shipping}`}
            </span>
          </div>

          <div className="border-t border-royal-gold/30 pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span className="montserrat text-lg text-dark-chocolate">
                Total
              </span>
              <span className="montserrat text-lg text-dark-chocolate">
                ₹{total}
              </span>
            </div>
          </div>

          {/* Value Ladder */}
          {nextTier && (
            <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4">
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
              <p className="text-sm font-medium text-foreground">
                Unlocked perks:
              </p>
              {unlockedPerks.map((perk) => (
                <Badge
                  key={perk.threshold}
                  variant="secondary"
                  className="bg-gold-600/20 text-gold-400"
                >
                  <perk.icon className="h-3 w-3 mr-1" />
                  {perk.perk}
                </Badge>
              ))}
            </div>
          )}

          <Button
            size="lg"
            onClick={() => setIsCheckoutOpen(true)}
            disabled={items.length === 0}
            className="w-full text-white font-semibold py-3 rounded-full transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-royal-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#2a1914",
              boxShadow: "0 8px 24px rgba(42,25,20,0.12)",
            }}
          >
            Proceed to Checkout
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Secure checkout powered by Razorpay. Your payment information is
            encrypted and secure.
          </p>
        </CardContent>
      </Card>

      <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
    </>
  );
}
