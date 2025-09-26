import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center -mt-20 pt-20" style={{backgroundImage: 'url(/herobackground.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Decorative corner motif - hidden on mobile */}
          <div className="absolute top-8 right-8 w-16 h-16 opacity-20 hidden sm:block">
            <svg viewBox="0 0 64 64" className="w-full h-full text-royal-gold">
              <path d="M32 0L48 16L32 32L16 16L32 0Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <h1 className="satisfy-regular text-[32px] sm:text-[48px] md:text-[64px] lg:text-[68px] text-charcoal mb-6 sm:mb-8 text-balance leading-tight px-2">
            Premium Clean-Label Snacks
            <span className="block text-deep-plum mt-2 sm:mt-4 font-semibold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">Dehydration, not destruction</span>
            <span className="mt-2 sm:mt-3 inline-block h-[2px] w-12 sm:w-16 bg-[#D4AF37]/70"></span>
          </h1>

          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-warm-taupe mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty px-4">
            Activated almonds and dehydrated real fruits. No preservatives, no gluten, minimal sugar. Lab-tested quality
            in every batch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button size="lg" asChild className="bg-[#3A2B3F] text-soft-cream hover:bg-[#2E2132] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]">
              <Link href="/products">
                Shop Snacks
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border border-[#D4AF37]/40 text-[#2A2420] hover:bg-[#F6EFE6] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <Link href="/corporate">
                Corporate Gifting
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle gold keyline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-30"></div>
    </section>
  )
}
