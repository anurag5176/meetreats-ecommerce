import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, phone, budget, selectedProducts, totalAmount } = body

    // Generate quote ID
    const quoteId = `QT${Date.now()}`

    // Create quote record
    const quote = {
      id: quoteId,
      companyName,
      contactPerson,
      email,
      phone,
      budget,
      selectedProducts,
      totalAmount,
      status: "pending",
      createdAt: new Date().toISOString(),
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    }

    // In a real app, save to database and send email
    console.log("[v0] New corporate quote:", quote)

    return NextResponse.json({
      success: true,
      data: { quoteId, quote },
    })
  } catch (error) {
    console.error("[v0] Quote creation error:", error)
    return NextResponse.json({ success: false, error: "Failed to create quote" }, { status: 500 })
  }
}
