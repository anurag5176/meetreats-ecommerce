import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body

    // Mock payment verification
    // In a real app, verify with Razorpay API
    console.log("[v0] Verifying payment:", { razorpay_payment_id, razorpay_order_id })

    // For demo purposes, always return success
    return NextResponse.json({
      success: true,
      verified: true,
      paymentId: razorpay_payment_id,
    })
  } catch (error) {
    console.error("[v0] Payment verification error:", error)
    return NextResponse.json({ success: false, error: "Payment verification failed" }, { status: 500 })
  }
}
