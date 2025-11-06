"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export function CorporateGiftingShowcase() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div
            className={`order-1 lg:order-1 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="/CORPORATEGIFTING.jpg"
                alt="Corporate Gifting Solutions"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "center 60%" }}
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`order-2 lg:order-2 space-y-8 transition-all duration-700 ease-out ${
              isSectionVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Two-line headline */}
            <div>
              <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase">
                ELEVATE YOUR BUSINESS RELATIONS
              </div>
              <h2
                className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl text-dark-chocolate font-semibold tracking-tight"
                style={{
                  fontWeight: "700",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                THE CRAFT OF THOUGHTFUL GIFTING
              </h2>
            </div>

            {/* Body text */}
            <div className="space-y-4">
              <p className="montserrat text-lg text-dark-chocolate/80 leading-relaxed font-light">
                From clean-label treats to bespoke hampers, every MeeTreats gift
                embodies care, intention, and modern indulgence. Whether
                celebrating milestones or nurturing partnerships, our gifting
                experiences turn gestures into memories.
              </p>
              <p className="montserrat text-base text-dark-chocolate/70 leading-relaxed font-light">
                Tailored branding, luxury packaging, and large-volume dispatch
                available.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <Link
                href="/corporate"
                className="group inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg w-full sm:w-auto font-light tracking-wider border-0 rounded-none text-white hover:shadow-lg transition-all duration-500 montserrat"
                style={{ backgroundColor: "#2a1914" }}
              >
                <span className="mr-3">Explore Gifting Solutions</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
