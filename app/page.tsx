import { Hero } from "@/components/features/home/hero"
import { ValuePropStrip } from "@/components/features/home/value-prop-strip"
import { ProcessStrip } from "@/components/features/home/process-strip"
import { FeaturedProducts } from "@/components/features/home/featured-products"
import { WhyItCostsMore } from "@/components/features/home/why-it-costs-more"
import { CTABand } from "@/components/features/home/cta-band"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ValuePropStrip />
      <ProcessStrip />
      <FeaturedProducts />
      <WhyItCostsMore />
      <CTABand />
    </div>
  )
}
