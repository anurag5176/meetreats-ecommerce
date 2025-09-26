import { type NextRequest, NextResponse } from "next/server"
import { orders } from "@/lib/data/orders"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { identifier, otp } = body

    // Validate OTP (mock validation)
    if (otp !== "123456") {
      return NextResponse.json({ success: false, error: "Invalid OTP" }, { status: 400 })
    }

    // Find order by email or phone
    const order = orders.find((o) => o.customerInfo.email === identifier || o.customerInfo.phone === identifier)

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: order,
    })
  } catch (error) {
    console.error("[v0] Order tracking error:", error)
    return NextResponse.json({ success: false, error: "Failed to track order" }, { status: 500 })
  }
}
