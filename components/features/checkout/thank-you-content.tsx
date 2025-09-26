"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, MessageCircle } from "lucide-react"
import type { Order } from "@/lib/types"

export function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      fetch(`/api/orders/${orderId}`)
        .then((res) => res.json())
        .then((data) => {
          setOrder(data)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [orderId])

  if (isLoading) {
    return <div className="text-center">Loading order details...</div>
  }

  if (!order) {
    return (
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="satisfy-regular text-4xl text-foreground mb-4">Order Not Found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find your order details.</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="satisfy-regular text-5xl text-foreground mb-4">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="font-mono text-foreground">{order.id}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground">{order.email}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-xl font-bold text-foreground">₹{order.totalINR}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Items Ordered</p>
              <div className="space-y-2 mt-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Order Processing</h3>
                <p className="text-sm text-muted-foreground">
                  We're preparing your order. You'll receive an email when it's ready to ship.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Your order will be shipped within 2-3 business days. Track your package anytime.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Questions? Our support team is here to help via WhatsApp or email.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <Button asChild variant="outline">
          <Link href={`/track?orderId=${order.id}`}>Track Your Order</Link>
        </Button>

        <Button asChild className="bg-gold-600 hover:bg-gold-400 text-brand-900">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>

      {/* Festival Confetti Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-600 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce delay-300" />
      </div>
    </div>
  )
}
