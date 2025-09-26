import jsPDF from "jspdf"

interface QuoteData {
  budget: number
  quantity: number
  totalBudget: number
  selectedProducts: any[]
  includeLogoCard: boolean
  deliveryWindow: string
  generatedAt: string
}

export async function generateQuotePDF(data: QuoteData): Promise<Blob> {
  const doc = new jsPDF()

  // Header
  doc.setFontSize(20)
  doc.setTextColor(212, 175, 55) // Gold color
  doc.text("MeeTreats", 20, 30)

  doc.setFontSize(16)
  doc.setTextColor(0, 0, 0)
  doc.text("Corporate Hamper Quote", 20, 45)

  // Quote details
  doc.setFontSize(12)
  doc.text(`Generated on: ${new Date(data.generatedAt).toLocaleDateString()}`, 20, 60)

  // Budget information
  doc.setFontSize(14)
  doc.text("Quote Summary", 20, 80)

  doc.setFontSize(11)
  const summaryY = 95
  doc.text(`Budget per hamper: ₹${data.budget}`, 20, summaryY)
  doc.text(`Quantity: ${data.quantity} hampers`, 20, summaryY + 10)
  doc.text(`Total budget: ₹${data.totalBudget}`, 20, summaryY + 20)
  doc.text(`Logo card included: ${data.includeLogoCard ? "Yes (+₹50 per hamper)" : "No"}`, 20, summaryY + 30)
  doc.text(`Delivery window: ${data.deliveryWindow}`, 20, summaryY + 40)

  // Selected products
  if (data.selectedProducts.length > 0) {
    doc.setFontSize(14)
    doc.text("Selected Products", 20, summaryY + 65)

    doc.setFontSize(11)
    let productY = summaryY + 80
    data.selectedProducts.forEach((product, index) => {
      doc.text(`${index + 1}. ${product.name} - ₹${product.priceINR} (${product.weightGrams}g)`, 25, productY)
      productY += 10
    })
  }

  // Footer
  doc.setFontSize(10)
  doc.setTextColor(128, 128, 128)
  doc.text("This is a preliminary quote. Final pricing may vary based on customization.", 20, 250)
  doc.text("Contact us at corporate@meetreats.com or +91 98765 43210", 20, 260)

  return doc.output("blob")
}
