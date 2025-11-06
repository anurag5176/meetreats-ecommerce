"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, Thermometer, Info } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

const processSteps = [
  {
    icon: Droplets,
    title: "Soak",
    description:
      "Premium nuts soaked to awaken natural enzymes and enhance bioavailability.",
    detail:
      "We soak our almonds for 8-12 hours in filtered water to activate natural enzymes, making them easier to digest and increasing nutrient bioavailability.",
  },
  {
    icon: Zap,
    title: "Activate",
    description: "Gentle activation unlocks nutrition and lightens texture.",
    detail:
      "The soaking process activates dormant enzymes and reduces anti-nutrients like phytic acid, making the almonds more nutritious and easier to digest.",
  },
  {
    icon: Thermometer,
    title: "Dehydrate ≤70°C",
    description:
      "Low-temperature dehydration preserves purity, flavour, and vitality.",
    detail:
      "Our controlled dehydration process at temperatures below 70°C preserves heat-sensitive vitamins, enzymes, and natural flavors while achieving the perfect crunch.",
  },
];

export function ProcessStrip() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section ref={sectionRef} className="pb-20 sm:pb-24 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline with high-contrast serif font */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            THIS IS HOW WE CRAFT YOUR TREATS
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            THE ART OF ACTIVATION
          </h2>
        </div>

        {/* Process steps in cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className={`bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl group transition-all duration-700 ease-out hover:shadow-2xl relative overflow-hidden h-80 flex flex-col ${
                isSectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Default content */}
              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className="mb-4">
                  <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-royal-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <CardTitle className="montserrat font-bold text-lg sm:text-xl text-dark-chocolate uppercase tracking-wider">
                  {step.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center flex-1 flex flex-col justify-between">
                {/* Description */}
                <p className="montserrat text-sm sm:text-base text-dark-chocolate/80 font-light leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Interaction Instructions */}
                <div className="montserrat text-xs font-medium text-dark-chocolate/60 text-center">
                  <span className="hidden md:inline">Hover for details</span>
                  <span className="md:hidden">Tap for details</span>
                </div>
              </CardContent>

              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-2xl border border-royal-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center">
                <p className="montserrat text-sm text-dark-chocolate leading-relaxed max-w-xs">
                  {step.detail}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
