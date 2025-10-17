"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Droplets, Zap, Thermometer, Info } from "lucide-react"
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal"

const processSteps = [
  {
    icon: Droplets,
    title: "Soak",
    description: "Premium almonds soaked to activate enzymes and improve digestibility",
    detail:
      "We soak our almonds for 8-12 hours in filtered water to activate natural enzymes, making them easier to digest and increasing nutrient bioavailability.",
  },
  {
    icon: Zap,
    title: "Activate",
    description: "Natural activation process enhances nutritional value",
    detail:
      "The soaking process activates dormant enzymes and reduces anti-nutrients like phytic acid, making the almonds more nutritious and easier to digest.",
  },
  {
    icon: Thermometer,
    title: "Dehydrate ≤70°C",
    description: "Low-temperature dehydration preserves nutrients and natural flavors",
    detail:
      "Our controlled dehydration process at temperatures below 70°C preserves heat-sensitive vitamins, enzymes, and natural flavors while achieving the perfect crunch.",
  },
]

export function ProcessStrip() {
  const [selectedStep, setSelectedStep] = useState<(typeof processSteps)[0] | null>(null)
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0)

  return (
    <section ref={sectionRef} className="pb-20 sm:pb-24 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline with high-contrast serif font */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${
          isSectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: '0.2s'}}>
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            THIS IS HOW WE CRAFT YOUR TREATS
          </div>
          <h2 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
            THE ART OF ACTIVATION
          </h2>
        </div>

        {/* Process steps with proper alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className={`text-center group transition-all duration-700 ease-out ${
              isSectionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: `${0.4 + index * 0.1}s`}}>
              {/* Icon and title */}
              <div className="mb-8">
                <div className="mb-6">
                  <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-royal-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Title in deep chocolate brown, sans-serif, all caps */}
                <h3 className="montserrat font-medium text-lg sm:text-xl text-dark-chocolate uppercase tracking-wider mb-4">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="montserrat text-sm sm:text-base text-dark-chocolate/80 mb-6 font-light leading-relaxed">
                {step.description}
              </p>

              {/* Exclusive Learn More CTA */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group/btn montserrat text-sm font-medium text-dark-chocolate hover:text-royal-gold transition-colors duration-300 flex items-center justify-center mx-auto">
                    <span className="border-b border-transparent group-hover/btn:border-royal-gold/50 transition-all duration-300">
                      Learn More
                    </span>
                    <svg className="ml-2 h-3 w-3 text-royal-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center cormorant-garamond text-xl text-dark-chocolate">
                      <step.icon className="h-6 w-6 text-royal-gold mr-3" />
                      {step.title}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">{step.detail}</p>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
