import { Suspense } from "react"
import { LabReportsContent } from "@/components/features/labs/lab-reports-content"

interface SearchParams {
  batch?: string
}

export default function LabsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="min-h-screen bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="satisfy-regular text-5xl text-charcoal mb-4">Lab Reports</h1>
          <p className="text-lg text-warm-taupe max-w-2xl mx-auto">
            Transparency is at the heart of our quality promise. Every batch undergoes comprehensive lab testing for
            safety, purity, and nutritional accuracy.
          </p>
        </div>

        <Suspense fallback={<div>Loading lab reports...</div>}>
          <LabReportsContent selectedBatch={searchParams.batch} />
        </Suspense>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Lab Reports - MeeTreats",
  description:
    "View comprehensive lab reports for all MeeTreats products. Quality testing results for safety, purity, and nutrition.",
}
