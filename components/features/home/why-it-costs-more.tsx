"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock, Shield, Award, Zap } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Time-Intensive Process",
    description: "Our 24-48 hour process from soaking to packaging ensures optimal quality and nutrition.",
  },
  {
    icon: Shield,
    title: "Premium Equipment",
    description: "SS304 stainless steel contact surfaces and controlled temperature systems maintain purity.",
  },
  {
    icon: Award,
    title: "Lower Yield",
    description: "Careful selection and processing means we use only the finest ingredients, reducing overall yield.",
  },
  {
    icon: Zap,
    title: "Nitrogen Flush Sealing",
    description: "Advanced packaging technology preserves freshness and extends shelf life naturally.",
  },
]

export function WhyItCostsMore() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="satisfy-regular text-4xl text-foreground mb-4">Why Premium Quality Costs More</h2>
            <p className="text-muted-foreground">
              Understanding the value behind our pricing and commitment to quality.
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mx-auto block mb-8 bg-transparent">
                Learn About Our Process
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Why Our Snacks Cost More</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border pt-4 mt-6">
                  <p className="text-sm text-muted-foreground">
                    Every step in our process is designed to deliver the highest quality, most nutritious snacks
                    possible. We believe in transparency about our methods and pricing.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
