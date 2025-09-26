import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - MeeTreats",
  description: "MeeTreats terms of service and conditions of use.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-balance">Terms of Service</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using MeeTreats' website and services, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Products and Orders</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All products are subject to availability</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Orders are processed within 1-2 business days</li>
              <li>Delivery times are estimates and may vary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Products can be returned within 7 days of delivery</li>
              <li>Items must be unopened and in original packaging</li>
              <li>Refunds will be processed within 5-7 business days</li>
              <li>Shipping costs are non-refundable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Quality Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              We guarantee the quality of our products. All items come with lab reports and quality certifications. If
              you're not satisfied with the quality, please contact us within 48 hours of delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, contact us at legal@meetreats.com or +91 98765 43210.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
