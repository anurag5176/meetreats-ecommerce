"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Package, Truck, CheckCircle, Clock, MapPin, Download, ArrowLeft, Phone, MessageCircle } from "lucide-react"
import type { Order } from "@/lib/types"

interface OrderDetailsProps {
  orderData: {
    order: Order
    events: Array<{
      id: string
      type: string
      createdAt: string
      meta?: any
    }>
  }
  onReset: () => void
}

const statusConfig = {
  PLACED: { icon: Clock, color: "text-blue-500", bg: "bg-blue-500/20", label: "Order Placed" },
  PAID: { icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/20", label: "Payment Confirmed" },
  SHIPPED: { icon: Package, color: "text-purple-500", bg: "bg-purple-500/20", label: "Shipped" },
  OUT_FOR_DELIVERY: { icon: Truck, color: "text-orange-500", bg: "bg-orange-500/20", label: "Out for Delivery" },
  DELIVERED: { icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/20", label: "Delivered" },
  CANCELLED: { icon: Clock, color: "text-red-500", bg: "bg-red-500/20", label: "Cancelled" },
}

export function OrderDetails({ orderData, onReset }: OrderDetailsProps) {
  const { order, events } = orderData
  const currentStatus = statusConfig[order.status]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const downloadInvoice = () => {
    // In a real app, this would generate and download the invoice
    console.log("Downloading invoice for order:", order.id)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onReset} className="text-gold-400 hover:text-gold-300">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Track Another Order
        </Button>

        <Button variant="outline" onClick={downloadInvoice} className="bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Download Invoice
        </Button>
      </div>

      {/* Order Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Order #{order.id.slice(-8).toUpperCase()}</CardTitle>
            <Badge variant="secondary" className={`${currentStatus.bg} ${currentStatus.color} border-0`}>
              <currentStatus.icon className="h-4 w-4 mr-1" />
              {currentStatus.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Order Date</p>
              <p className="font-medium">{formatDate(order.createdAt)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Amount</p>
              <p className="font-medium text-lg">₹{order.totalINR}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Items</p>
              <p className="font-medium">{order.items.length} products</p>
            </div>
          </div>

          <Separator />

          {/* Delivery Address */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Delivery Address</span>
            </div>
            <div className="text-sm text-muted-foreground ml-6">
              <p>{order.address.name}</p>
              <p>{order.address.line1}</p>
              {order.address.line2 && <p>{order.address.line2}</p>}
              <p>
                {order.address.city}, {order.address.state} {order.address.pincode}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Order Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((event, index) => {
                const config = statusConfig[event.type as keyof typeof statusConfig]
                if (!config) return null

                return (
                  <div key={event.id} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <config.icon className={`h-5 w-5 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{config.label}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(event.createdAt)}</p>
                      </div>
                      {event.meta?.message && (
                        <p className="text-sm text-muted-foreground mt-1">{event.meta.message}</p>
                      )}
                      {event.meta?.trackingNumber && (
                        <p className="text-sm text-muted-foreground mt-1">Tracking: {event.meta.trackingNumber}</p>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.weight}g × {item.quantity}
                  </p>
                </div>
                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Options */}
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Have questions about your order? Our support team is here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex-1 bg-green-500/10 border-green-500/20" asChild>
              <a
                href={`https://wa.me/919876543210?text=Hi! I need help with my order ${order.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
                WhatsApp Support
              </a>
            </Button>

            <Button variant="outline" className="flex-1 bg-transparent" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call Support
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
