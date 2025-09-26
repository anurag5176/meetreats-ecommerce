import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function CTABand() {
  return (
    <section className="py-16 bg-gradient-to-r from-gold-600/10 to-gold-400/10 border-y border-gold-400/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Gift className="h-12 w-12 text-gold-400 mx-auto mb-6" />
          <h2 className="satisfy-regular text-4xl text-foreground mb-4">Try the Flavor Flight Sampler</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't decide? Our curated sampler pack lets you taste all our signature flavors. Perfect for first-time
            customers or as a thoughtful gift.
          </p>
          <Button size="lg" asChild className="btn-plum px-8 py-4 text-lg">
            <Link href="/products/flavor-flight-sampler">Order Sampler Pack</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
