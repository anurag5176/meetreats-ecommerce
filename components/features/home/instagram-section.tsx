"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function InstagramSection() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section ref={sectionRef} className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Aesthetic line before content */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Two-line headline with color contrast */}
          <div
            className={`mb-8 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="montserrat text-base sm:text-lg text-dark-chocolate mb-4 font-medium tracking-wider uppercase">
              FOLLOW US ON
            </div>
            <h2
              className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal-gold font-semibold tracking-tight"
              style={{
                fontWeight: "700",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              INSTAGRAM
            </h2>
          </div>

          {/* Optional subtext */}
          <p
            className={`montserrat text-sm sm:text-base text-dark-chocolate/70 mb-12 font-light tracking-wide transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            FOR DAILY INSPIRATION AND MINDFUL INDULGENCE.
          </p>

          {/* Instagram CTA */}
          <div
            className={`text-center transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <Link
              href="https://instagram.com/meetreatsofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 border border-dark-chocolate/20 hover:border-royal-gold/50 transition-all duration-300 rounded-lg montserrat"
            >
              <Instagram className="h-6 w-6 text-dark-chocolate group-hover:text-royal-gold transition-colors duration-300 mr-3" />
              <span className="montserrat text-base font-medium text-dark-chocolate group-hover:text-royal-gold transition-colors duration-300">
                @MeeTreatsOfficial
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
