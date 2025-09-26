"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Droplets, Zap, Thermometer, Info } from "lucide-react"

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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="satisfy-regular text-4xl text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps that make all the difference in taste, nutrition, and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-600 to-gold-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-brand-900" />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent -translate-x-8" />
                )}
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
                    <Info className="h-4 w-4 mr-1" />
                    Learn more
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center">
                      <step.icon className="h-6 w-6 text-gold-400 mr-2" />
                      {step.title}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground">{step.detail}</p>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
