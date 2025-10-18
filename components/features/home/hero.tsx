import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden h-screen flex items-center -mt-20 pt-20"
      style={{
        backgroundImage: "url(/herobackground.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 sm:bg-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left max-w-4xl">
          {/* Content container with left alignment */}
          <div className="h-[60vh] flex flex-col justify-center">
            {/* Main Headline - Reduced size, left aligned */}
            <h1 className="cormorant-garamond text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-dark-chocolate mb-6 sm:mb-8 text-balance leading-[0.9] font-light tracking-tight animate-fade-in-up hover:scale-105 transition-transform duration-700 ease-out cursor-default">
              The India's Finest Treats.
              <br />
              <span className="text-royal-gold/90 hover:text-royal-gold transition-colors duration-500">
                Crafted for You.
              </span>
            </h1>

            {/* Sub-headline - Reduced size, left aligned */}
            <p
              className="montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] 
text-white sm:text-charcoal/70 
[text-shadow:0_2px_6px_rgba(0,0,0,0.5)] sm:[text-shadow:none]
mb-8 sm:mb-10 max-w-xl text-pretty font-light tracking-wide 
animate-fade-in-up animate-delay-200 
hover:text-charcoal/90 transition-colors duration-500 cursor-default"
            >
              Artisanal activated nuts and dehydrated fruits, crafted with clean
              ingredients and thoughtful care.
            </p>

            {/* CTA Buttons - Left aligned, reduced size */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-start items-start animate-fade-in-up animate-delay-400">
              {/* Mobile: compact buttons, left aligned; Desktop: keep original sizes */}
              <Button
                size="lg"
                asChild
                className="text-soft-cream hover:text-soft-cream hover:scale-105 transition-transform duration-500 px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base w-auto sm:w-auto font-light tracking-wider border-0 rounded-none montserrat"
                style={{ backgroundColor: "#2a1914" }}
              >
                <Link href="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border border-charcoal/30 text-charcoal hover:text-soft-cream hover:bg-[#2a1914] transition-all duration-500 px-4 sm:px-10 py-2.5 sm:py-5 text-sm sm:text-lg w-auto sm:w-auto font-light tracking-wider rounded-none bg-transparent hover:scale-105 montserrat"
              >
                <Link href="/corporate">
                  Corporate Gifting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle luxury keyline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
    </section>
  );
}
