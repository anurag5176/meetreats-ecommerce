"use client";

import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";
import { HamperCard } from "@/components/features/gifting/hamper-card";
import { products } from "@/lib/data/products";
import { Gift } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Filter featured products for ready-made hampers and limit to 3
const readyMadeProducts = products.filter((product) => product.featured).slice(0, 3);

export function ReadyMadeHampers() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section
      id="ready-made-hampers"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-soft-cream"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase">
            SHOP READY-MADE GIFT HAMPERS
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl text-dark-chocolate font-semibold tracking-tight"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            CURATED GIFT COLLECTIONS
          </h2>
          <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
            Beautifully curated gift hampers ready to purchase. Perfect for
            quick gifting or when you want something special without the
            customization.
          </p>
        </div>

        {/* Products Grid - 3 full-size cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 max-w-7xl mx-auto">
          {readyMadeProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ease-out ${
                isSectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <HamperCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${0.3 + readyMadeProducts.length * 0.1}s`,
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 mb-6 pt-5">
            <div className="flex items-center justify-center space-x-3">
              <Gift className="h-7 w-7 text-royal-gold flex-shrink-0" />
              <p className="montserrat text-lg sm:text-xl text-charcoal/70 font-light">
                Want to see all our products?
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-sm montserrat font-light tracking-wider border-0 rounded-none text-white hover:shadow-lg transition-all duration-500 hover:scale-105"
              style={{ backgroundColor: "#2a1914" }}
            >
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

