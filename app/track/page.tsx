import { TrackingInterface } from "@/components/features/tracking/tracking-interface"

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="satisfy-regular text-4xl text-charcoal mb-4">Track Your Order</h1>
            <p className="text-warm-taupe">
              Enter your email or phone number to receive an OTP and track your order status.
            </p>
          </div>

          <TrackingInterface />
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Track Order - MeeTreats",
  description: "Track your MeeTreats order with OTP verification. Get real-time updates on your delivery status.",
}
