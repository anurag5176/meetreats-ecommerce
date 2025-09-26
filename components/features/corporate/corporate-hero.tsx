import { Gift, Users, Award, Clock } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    title: "Custom Hampers",
    description: "Curated selections tailored to your budget and preferences",
  },
  {
    icon: Users,
    title: "Bulk Pricing",
    description: "Competitive rates for large orders with volume discounts",
  },
  {
    icon: Award,
    title: "Premium Packaging",
    description: "Elegant presentation with optional logo cards and branding",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Scheduled delivery windows to meet your corporate timelines",
  },
]

export function CorporateHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-brand-900 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="satisfy-regular text-5xl sm:text-6xl text-foreground mb-6">
            Corporate Gifting
            <span className="block text-gold-400 mt-2">Made Premium & Personal</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Delight your clients, employees, and partners with thoughtfully curated hampers of premium clean-label
            snacks. Perfect for festivals, milestones, and corporate appreciation.
          </p>

          <div className="bg-gold-600/10 border border-gold-400/20 rounded-lg p-4 inline-block">
            <p className="text-gold-400 font-medium">
              🎉 Diwali Special: Order by October 20th for guaranteed pre-festival delivery
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-600 to-gold-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-brand-900" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
