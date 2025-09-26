import { Suspense } from "react"
import { ThankYouContent } from "@/components/features/checkout/thank-you-content"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Suspense fallback={<div>Loading...</div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  )
}
