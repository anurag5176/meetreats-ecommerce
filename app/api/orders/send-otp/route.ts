import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { identifier } = body

    // Mock OTP sending
    console.log("[v0] Sending OTP to:", identifier)

    // In a real app, integrate with SMS/Email service
    // For demo purposes, always return success

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
    })
  } catch (error) {
    console.error("[v0] OTP sending error:", error)
    return NextResponse.json({ success: false, error: "Failed to send OTP" }, { status: 500 })
  }
}
