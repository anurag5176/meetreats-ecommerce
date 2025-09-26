import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, amount, customerInfo } = body

    // In production, create Razorpay order here
    const razorpayOrderId = `order_${Date.now()}`

    // Return Razorpay configuration (key is safe to expose for payment processing)
    return NextResponse.json({
      success: true,
      razorpayOrderId,
      razorpayKey: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_key",
    })
  } catch (error) {
    console.error("[v0] Payment creation error:", error)
    return NextResponse.json({ success: false, error: "Failed to create payment" }, { status: 500 })
  }
}
