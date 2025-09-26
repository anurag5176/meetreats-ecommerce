import { type NextRequest, NextResponse } from "next/server"

const mockBatches = [
  {
    id: "ALM001",
    productName: "Premium Activated Almonds",
    testDate: "2024-01-15",
    status: "passed",
    results: {
      moisture: "4.2%",
      protein: "21.8g/100g",
      fat: "49.3g/100g",
      carbs: "21.7g/100g",
      fiber: "12.5g/100g",
      aflatoxin: "Not Detected",
      pesticides: "Not Detected",
      heavyMetals: "Within Limits",
    },
  },
  {
    id: "MAN002",
    productName: "Dehydrated Mango Slices",
    testDate: "2024-01-20",
    status: "passed",
    results: {
      moisture: "18.5%",
      sugar: "65.2g/100g",
      vitaminC: "36.4mg/100g",
      sulfurDioxide: "Not Detected",
      pesticides: "Not Detected",
      microbial: "Within Limits",
    },
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const batchId = searchParams.get("batchId")

  if (batchId) {
    const batch = mockBatches.find((b) => b.id === batchId)
    if (!batch) {
      return NextResponse.json({ success: false, error: "Batch not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: batch })
  }

  return NextResponse.json({
    success: true,
    data: mockBatches,
  })
}
