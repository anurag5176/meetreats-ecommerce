"use client"

import { Shield, Leaf, FlaskConical, Award } from "lucide-react"
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal"

const values = [
  {
    icon: Leaf,
    text: "Low-Temperature Crafting",
  },
  {
    icon: Shield,
    text: "Zero Preservatives",
  },
  {
    icon: FlaskConical,
    text: "Lab-Verified Purity",
  },
  {
    icon: Award,
    text: "Thoughtfully Low Sugar",
  },
]

export function ValuePropStrip() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0)

  return (
    <section ref={sectionRef} className="bg-soft-cream py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ease-out ${
                isSectionVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Floating icon - no container, just the icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-royal-gold mx-auto group-hover:text-royal-gold/80 transition-all duration-500 group-hover:drop-shadow-lg" />
              </div>
              
              {/* Feature text in deep chocolate brown */}
              <span className="montserrat text-sm sm:text-base font-medium text-dark-chocolate uppercase tracking-wider group-hover:text-dark-chocolate/80 transition-colors duration-500 cursor-default">
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Thin divider line */}
      <div className={`mt-16 sm:mt-20 transition-all duration-700 ease-out ${
        isSectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`} style={{transitionDelay: '0.4s'}}>
        <div className="h-px bg-gradient-to-r from-transparent via-dark-chocolate/30 to-transparent"></div>
      </div>
    </section>
  )
}
