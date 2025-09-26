import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, customerInfo, paymentInfo, totalAmount } = body

    // Validate required fields
    if (!items || !customerInfo || !totalAmount) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Generate order ID
    const orderId = `MT${Date.now()}`

    // Create new order
    const newOrder = {
      id: orderId,
      items,
      customerInfo,
      paymentInfo,
      totalAmount,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      timeline: [
        {
          status: "Order Placed",
          timestamp: new Date().toISOString(),
          description: "Your order has been confirmed",
        },
      ],
    }

    // In a real app, save to database
    console.log("[v0] New order created:", newOrder)

    return NextResponse.json({
      success: true,
      data: { orderId, order: newOrder },
    })
  } catch (error) {
    console.error("[v0] Order creation error:", error)
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}
