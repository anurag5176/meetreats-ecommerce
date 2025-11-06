"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function CraftedWithoutCompromise() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Full-bleed background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/herobackground.png)",
          filter: "brightness(0.3) contrast(1.2)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl text-left">
          {/* Headline */}
          <h2
            className={`cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal-gold font-semibold tracking-tight mb-8 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              fontWeight: "700",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transitionDelay: "0.2s",
            }}
          >
            CRAFTED WITHOUT COMPROMISE
          </h2>

          {/* Body text */}
          <p
            className={`montserrat text-lg sm:text-xl text-soft-cream leading-relaxed mb-12 max-w-3xl font-light transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            From single-origin farms to our signature low-temperature craft,
            every step reflects patience and purpose. This quiet dedication
            ensures authentic flavour, superior nutrition, and unmistakable
            quality.
          </p>

          {/* CTA Link */}
          <div
            className={`text-left transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link
              href="#process"
              className="montserrat text-sm font-medium text-royal-gold hover:text-royal-gold/80 transition-colors duration-300 inline-flex items-center border-b border-transparent hover:border-royal-gold/50 transition-all duration-300"
            >
              LEARN OUR CRAFT
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
